from flask import Flask, render_template
from flask import request
from flask import make_response
from flask import abort
from flask import session, url_for, redirect, flash
from flask_script import Manager
from flask_sqlalchemy import SQLAlchemy
from flask_bootstrap import Bootstrap
from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField,FileField
from wtforms.validators import DataRequired
from flask_sqlalchemy import SQLAlchemy
import os

basedir = os.path.abspath(os.path.dirname(__file__))

class NameForm(FlaskForm):
    name = StringField('What is your name?', validators=[DataRequired()])
    submit = SubmitField("Submit")


class UploadForm(FlaskForm):
    name = StringField('What is your name?', validators=[DataRequired()])
    file = FileField("导入文件",validators=[DataRequired()])
    submit = SubmitField("Submit")
    submi1t = SubmitField("Submit")

app = Flask(__name__)
manager = Manager(app)
bootstrap = Bootstrap(app)
app.config['SECRET_KEY'] = 'hard to guess string'
app.config['SQLALCHEMY_DATABASE_URI']=\
    'sqlite:///'+os.path.join(basedir,'data.sqlite')
app.config['SQLALCHEMY_COMMIT_ON_TEARDOWN'] = True
app.config["SQLALCHEMY_ECHO"] = True
db = SQLAlchemy(app)



class Role(db.Model):
    __tablename__ = 'roles'
    id = db.Column(db.Integer,primary_key=True)
    name = db.Column(db.String(64),unique=True)
    users = db.relationship('User',backref='role')
    def __repr__(self):
        return '<Role %r> % self.name'
class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer,primary_key=True)
    username = db.Column(db.String(64),index=True)
    role_id = db.Column(db.Integer,db.ForeignKey('roles.id'))
    def __repr__(self):
        return '<User %r> % self.username'

# db.create_all()
print(User.__table__)
# # admin_role = Role(name='Admin3')
user_john = User(username='aaa')
# user_tom = User(username='tom',role=admin_role)


@app.route('/test', methods=["GET", "POST"])
def test():
    form = NameForm()
    if form.validate_on_submit():
        user = User.query.filter_by(username=form.name.data).first()
        if user is  None:
            user = User(username = form.name.data)
            db.session.add(user)
            session['known'] = False
        else:
            session['known'] = True
        session['name'] = form.name.data
        form.name.data = ''
        return redirect(url_for('test'))
        # form.name.data = ''
    return render_template('test.html',form=form,name=session.get('name'),
    known = session.get('known',False))

@app.route('/', methods=["GET", "POST"])
def index():
    form = UploadForm()
    if form.validate_on_submit():
        user = User.query.filter_by(username=form.name.data).first()
        if user is  None:
            user = User(username = form.name.data)
            db.session.add(user)
            session['known'] = False
        else:
            session['known'] = True
        session['name'] = form.name.data
        form.name.data = ''
        return redirect(url_for('index'))
        # form.name.data = ''
    return render_template('index.html',form=form,name=session.get('name'),
    known = session.get('known',False))
@app.route('/user/<name>', methods=["POST", "GET"])
def user(name):
    # respon = make_response("<h3>哈哈</h3>")
    # respon.set_cookie('test','33')
    # return respon
    form = NameForm()
    if form.validate_on_submit():
        old_name = session.get('name')
        if old_name is not None and old_name != form.name.data:
            flash("Look like you hava changed your name!")
        session['name'] = form.name.data
        # form.name.data = ''
        return redirect(url_for('user',name='dai111'))
    return render_template('user.html',form=form,name=session.get('name'))

@app.route('/404')
def notfound():
   
    abort(404)
@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html')
@app.errorhandler(500)
def internal_server_error(e):
    return render_template('500.html')
if __name__ == '__main__':
    app.run(debug=True)
