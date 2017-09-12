const AirBnBConfig = require('eslint-config-airbnb');
const path = require('path');
const stripComments = require('strip-json-comments');
const fs = require('fs');

// add the rules from the eslintrc files
const rules = ['node_modules/eslint-config-airbnb/.eslintrc', '.eslintrc'].reduce((allRules, file) => {
    const filename = path.join(__dirname, file);
    const data = stripComments(fs.readFileSync(filename, { encoding: 'utf-8' }));
    return Object.assign(allRules, JSON.parse(data).rules);
}, {});

module.exports = Object.assign(AirBnBConfig, { rules });
