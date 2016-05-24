'use strict'

const fs = require('fs');
const path = require('path');
const Console = require('console').Console;
const BASE_DIR = './logs';

const STDOUT_FILE = path.join(BASE_DIR, 'stdout.log');
const STDERR_FILE = path.join(BASE_DIR, 'stderr.log');
const config = {flags: 'a', defaultEncoding: 'utf8'};

const output = fs.createWriteStream(STDOUT_FILE, config);
const errorOutput = fs.createWriteStream(STDERR_FILE, config);

module.exports = new Console(output, errorOutput);