#__*__coding:utf-8__*__
from flask import Flask, render_template,send_from_directory
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
import math ,json,time
import gevent
from flask import copy_current_request_context
from crawl import Crawl
from lxml import etree

from concurrent.futures import ThreadPoolExecutor

executor = ThreadPoolExecutor(1)
basedir = os.path.abspath(os.path.dirname(__file__))

class NameForm(FlaskForm):
    name = StringField('What is your name?', validators=[DataRequired()])
    submit = SubmitField("Submit")


class UploadForm(FlaskForm):
    # name = StringField('What is your name?', validators=[DataRequired()])
    file = FileField("",validators=[DataRequired()])
    
    submit = SubmitField("确定导入")
   

app = Flask(__name__)
manager = Manager(app)
bootstrap = Bootstrap(app)
app.config['SECRET_KEY'] = 'hard to guess string'
app.config['SQLALCHEMY_DATABASE_URI']=\
    'sqlite:///'+os.path.join(basedir,'data.sqlite')
app.config['SQLALCHEMY_COMMIT_ON_TEARDOWN'] = True
# app.config["SQLALCHEMY_ECHO"] = True
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
    phonenumber = db.Column(db.String(64))
    # 0表示未抓取，1表示已抓取但未注册，2表示已抓取并且已注册
    status = db.Column(db.Integer)
    opt_time = db.Column(db.String(64))
    def __repr__(self):
        return '<PhoneList %r> % self.phonenumber'
    def to_dict(self):
        return {c.name: getattr(self, c.name, None) for c in self.__table__.columns}
class FileState(db.Model):
    __tablename__ = 'filestate'
    id = db.Column(db.Integer,primary_key = True)
    filename = db.Column(db.String(64),index=True)
    line_number_state = db.Column(db.Integer)
class Setting(db.Model):
    __tablename__ = 'setting'
    id = db.Column(db.Integer,primary_key = True)
    name = db.Column(db.String(64))
    value = db.Column(db.String(64))
    def to_dict(self):
        return {c.name: getattr(self, c.name, None) for c in self.__table__.columns}
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
        filename = form.file.data.filename
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
    print(dirs)
    print(dirs[slice(0,10)],1)
    if cur_p == None:
        dirs_temp = dirs[slice(0,10)]
        
    else:
        dirs_temp = dirs[slice((int(cur_p)-1)*10,(int(cur_p)-1)*10+10)]
        print(dirs_temp,2)
    return render_template('filelist.html',dirs=dirs_temp,page=list(range(1,(math.ceil((len(dirs)/10+1)))))) 

@app.route('/filedetail/<filename>',methods=["POST","GET"])
def filedetail(filename):
    page = request.args.get('p')

    if page == None:
        page = '1'
    page = int(page)
    data = PhoneList.query.filter_by(filename=filename).paginate(page, per_page=10, error_out = False)
    return render_template('filedetail.html',filename=filename,data=data.items)

@app.route('/crawl',methods=["POST","GET"])
def crawl():
    filename = request.form['filename']
    # 获取用户对象
    setting = Setting.query.filter_by(name = 'is_crawl').first()
    # 获取从哪来开始爬
    cur = PhoneList.query.filter_by(filename=filename).count()
    # 修改用户信息
    setting.value = '1'

    # 提交数据库会话
    db.session.commit()
    print(cur)
    print(cur if cur else 1)
    #后台开始爬取
    executor.submit(thread_func,filename,cur if cur else 0)
    return json.dumps({"status":'200',"message":'开始爬取'})

def thread_func(filename,cur):
    c = Crawl()
    
    #读取文件
    f = open('uploads/'+filename,'r')
    i = 1
    while 1:
        print(cur,i)
       
        line = f.readline().strip('\n')
        if i<=cur:
            i = i+1
            continue
        rs = Setting.query.filter_by(name='is_crawl').first()
        
        if rs.value == '0':
            break
        if not line:
            break
        time.sleep(1)
        flag = c.crawl(line)
        
        if flag:
            db.session.add(PhoneList(filename=filename,phonenumber=str(line),status="2",opt_time=int(time.time())))
            db.session.commit()
        else:
            db.session.add(PhoneList(filename=filename,phonenumber=str(line),status="1",opt_time=int(time.time())))
            db.session.commit()
        pass # do something
    f.close()
    
@app.route('/filedetail/ajax_query',methods=["POST","GET"])
def ajax_query():
    type = request.form['type']
    filename = request.form['filename']
    
    if str(type) == 'line_number' and filename !='':
        count = PhoneList.query.filter_by(filename=filename).count()
        last_phone_number = PhoneList.query.filter_by(filename=filename).order_by(PhoneList.opt_time.desc()).first()
        
        # for item in result:
        #     print(item.phonenumber)
    else:
        pass
    return json.dumps({"status":'200',"data":{"count":count,"last_phone_number":last_phone_number.phonenumber if last_phone_number else ''},"message":'开始爬取'})
@app.route('/ajax_download',methods=["POST","GET"])
def ajax_download():

    all_data = PhoneList.query.filter_by(status='2').order_by(PhoneList.opt_time.desc()).all()
    f = open("download/export.txt",'w')
    for data in all_data:
        f.writelines(data.phonenumber+'\n')
    f.close()
    if os.path.isfile(os.path.join('download', "export.txt")):
        return send_from_directory('download',"export.txt",as_attachment=True)
    abort(404) 

   
@app.route('/filedetail/ajax_opt',methods=["POST","GET"])
def ajax_opt():
    type = request.form['type']
    # filename = request.form['filename']
    
    if str(type) == 'stop':
        # 获取用户对象
        setting = Setting.query.filter_by(name = 'is_crawl').first()

        # 修改用户信息
        setting.value = '0'

        # 提交数据库会话
        db.session.commit()
    else:
        pass
    return json.dumps({"status":'200',"data":'',"message":'停止爬虫'})
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
    app.run(host='0.0.0.0',debug=True)
