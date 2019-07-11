from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def index():
	return render_template('index.html', title="Home")

@app.route('/404')
def Page404():
	return render_template('404.html', title="404")

@app.route('/buttons')
def buttons():
	return render_template('buttons.html', title="Buttons")

@app.route('/blank')
def blank():
	return render_template('blank.html', title="Blank")

@app.route('/cards')
def cards():
	return render_template('cards.html', title="Cards")

@app.route('/charts')
def charts():
	return render_template('charts.html', title="Charts")

@app.route('/forgot-password')
def forgotpassword():
	return render_template('forgot-password.html', title="Forgot Password")

@app.route('/login')
def login():
	return render_template('login.html', title="Login")

@app.route('/register')
def register():
	return render_template('register.html', title="Register")

@app.route('/tables')
def tables():
	return render_template('tables.html', title="Tables")

@app.route('/utilities-animation')
def u_animation():
	return render_template('utilities-animation.html', title="Utilities Animation")

@app.route('/utilities-border')
def u_border():
	return render_template('utilities-border.html', title="Utilities Border")

@app.route('/utilities-color')
def u_color():
	return render_template('utilities-color.html', title="Utilities Color")

@app.route('/utilities-other')
def u_other():
	return render_template('utilities-other.html', title="Utilities Other")


# app routes
@app.route('/estadisticas')
def estadisticas():
	return render_template('estadisticas.html', title="Estadisticas")

@app.route('/notificaciones')
def notificaciones():
	return render_template('notificaciones.html', title="Notificaciones")

@app.route('/main')
def main():
	return render_template('main.html', title="Main")


if __name__ == "__main__":
	app.run(debug=True, host='0.0.0.0')
	# app.run(host='0.0.0.0')