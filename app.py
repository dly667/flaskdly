#__*__coding:utf-8__*__
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
import os, sys
from werkzeug import secure_filename
import math
basedir = os.path.abspath(os.path.dirname(__file__))

class NameForm(FlaskForm):
    name = StringField('What is your name?', validators=[DataRequired()])
    submit = SubmitField("Submit")


class UploadForm(FlaskForm):
    name = StringField('What is your name?', validators=[DataRequired()])
    file = FileField("导入文件",validators=[DataRequired()])
    submit = SubmitField("Submit")
   

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
class PhoneList(db.Model):
    __tablename__ = 'phonelist'
    id = db.Column(db.Integer,primary_key=True)
    filename = db.Column(db.String(64),index=True)
    phonenumber = db.Column(db.Integer)
    # 0表示未抓取，1表示已抓取但未注册，2表示已抓取并且已注册
    status = db.Column(db.Integer)
    def __repr__(self):
        return '<User %r> % self.username'
# db.create_all()


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
    if session.get('upload_status') == True:
        session['upload_status'] = False
    else:
        session['upload_done'] = 0
    form = UploadForm()
    if form.validate_on_submit():
        filename = secure_filename(form.file.data.filename)
        form.file.data.save('uploads/' + filename)
        session['upload_status'] = True
        session['upload_done'] = 1
        
        return redirect(url_for('index'))
    else:
        filename = None
    return render_template('index.html', form=form, filename=filename,upload_done = session.get('upload_done'))

@app.route('/filelist/',methods=["POST","GET"])
def filelist():
    # 打开文件
    path = basedir+'/uploads/'
    dirs = os.listdir( path )
    #页码
    cur_p = request.args.get('p')
   
    # 输出所有文件和文件夹
    # for file in dirs:
    #     print(file)
    
    if cur_p == None:
        dirs_temp = dirs[slice(1,10)]
    else:
        dirs_temp = dirs[slice((int(cur_p)-1)*10,(int(cur_p)-1)*10+10)]
   
    return render_template('filelist.html',dirs=dirs_temp,page=list(range(1,(math.ceil((len(dirs)/10+1)))))) 

@app.route('/filedetail/<filename>',methods=["POST","GET"])
def filedetail(filename):

    return render_template('filedetail.html',filename=filename)
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
