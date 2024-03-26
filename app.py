from flask import Flask,render_template
from flask_wtf import FlaskForm
from wtforms import FileField,SubmitField
from werkzeug.utils import secure_filename
import os

app = Flask(__name__)
app.config['SECRET_KEY'] = 'mysecretkey'
app.config['UPLOAD_FOLDER'] = 'static/files'

class UploadFileForm(FlaskForm):
    file = FileField('File')
    submit = SubmitField('Upload')

@app.route('/',methods = ['GET','POST'])
def index():
    form = UploadFileForm()
    if form.validate_on_submit():
        file = form.file.data
        print(secure_filename(file.filename))
        file.save(os.path.join(os.path.abspath(os.path.dirname(__file__)),app.config['UPLOAD_FOLDER'],secure_filename(file.filename)))
        return 'File uploaded successfully'
    return render_template('index.html',form = form)

if __name__ == '__main__':
    app.run(debug=True)