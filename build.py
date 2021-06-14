#!/usr/bin/python3

import subprocess

print('Building for Linux...')
subprocess.run('xgo --targets=windows/* -ldflags=\'-H windowsgui\' .', shell=True)

print('Building for Windows...')
subprocess.run('xgo --targets=linux/* .', shell=True)
