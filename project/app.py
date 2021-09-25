import os
from flask import Flask, render_template, url_for

app = Flask(__name__)
app.config["SECRET_KEY"] = os.getenv("APP_KEY")


@app.route("/")
def main():
    return render_template("index.html")


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
