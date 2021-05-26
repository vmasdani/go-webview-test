#!/usr/bin/python3

import subprocess

print('Building without CGO')

print('Linux')

subprocess.run('go build -o webview-example',shell=True)

print('Windows')

subprocess.run('go build -ldflags="-H windowsgui" -o webview-example.exe', shell=True)
