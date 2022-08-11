from sre_constants import SUCCESS
from flask import Flask, jsonify, send_file
from flask import request
import json
import os
import subprocess

app = Flask(__name__)

@app.route("/")
def hello():
    return "<h1 style='color:blue'>Welcome to the Orcfax docs!</h1>"

@app.route("/update", methods = ['POST'])
def update():
    print("test")
    print(request.data)
    json_data = json.loads(str(request.data, encoding='utf-8'))
    branchName = json_data["ref"]
    print("Branch name:")
    print(branchName)
    chop = branchName.split('/')
    branchName = (chop[len(chop)-1])
    if (branchName == "main"):
        directory = os.getcwd()
        directory = (directory + "/nginxConfig.sh")
        subprocess.run([directory])
        return jsonify(success='true')
    else:
        return jsonify(success='false')

if __name__ == "__main__":
    app.run(host='0.0.0.0')