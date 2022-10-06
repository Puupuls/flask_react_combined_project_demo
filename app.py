from flask import Flask, render_template, request

app = Flask(__name__)
app.config["DEBUG"] = True
app.env = 'development'
app.template_folder = 'templates'


@app.route("/test")
def test():
    name = request.args.get('name')
    return ("<form method='post'><input type='text' placeholder='POST name' name='name'></form>" \
           "<form method='GET'><input type='text' placeholder='GET name' name='name'></form>") if not name else f"Hello {name}!"


@app.route("/test", methods=["POST"])
def test_post():
    name = request.form.get("name")
    return f"Hello {name}!"


@app.route("/")
@app.route("/about")
@app.route('/contact')
def react_interface():
    return render_template('index.html')


if __name__ == '__main__':
    app.run(
        debug=True,
        load_dotenv=False,
        threaded=True,
    )
