const AirBnBConfig = require('eslint-config-airbnb');
const path = require('path');
const stripComments = require('strip-json-comments');
const fs = require('fs');

const filename = path.join(__dirname, '.eslintrc');
const data = stripComments(fs.readFileSync(filename, { encoding: 'utf-8' }));
const { rules, overrides, env } = JSON.parse(data);

module.exports = Object.assign(
    AirBnBConfig,
    {
        rules: Object.assign(AirBnBConfig.rules, rules), // Merge airbnb and dhis2 rules where ours take precedence
        overrides,
        env,
    },
);
