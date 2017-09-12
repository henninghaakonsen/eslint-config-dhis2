const AirBnBConfig = require('eslint-config-airbnb');
const path = require('path');
const stripComments = require('strip-json-comments');
const fs = require('fs');

const filename = path.join(__dirname, '.eslintrc');
const data = stripComments(fs.readFileSync(filename, { encoding: 'utf-8' }));
const rules = JSON.parse(data).rules;

module.exports = Object.assign(AirBnBConfig, { rules });
