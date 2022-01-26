import os
from flask import Flask, render_template, url_for, json

app = Flask(__name__)
app.config["SECRET_KEY"] = os.getenv("APP_KEY")


def read_local_json():
    SITE_ROOT = os.path.realpath(os.path.dirname(__file__))
    json_url = os.path.join(SITE_ROOT, "static/data", "test_data.json")
    data = json.load(open(json_url, encoding="utf-8"))
    return data


@app.route("/")
def main():
    json_data = read_local_json()
    return render_template("index.html", data=json_data)


if __name__ == "__main__":
    # port 8080 for google cloud run
    app.run(host="0.0.0.0", port=8080, debug=False)
