/* eslint-disable no-console */

/**
 *  Run eslint on all js files that have been changed since
 *  the branch was created, including untracked js files
 */

const shell = require('shelljs');
const path = require('path');
const CLIEngine = require('eslint').CLIEngine;
const formatter = require('eslint-friendly-formatter');

if (!shell.which('git')) {
    shell.echo('Sorry, this script requires git');
    shell.exit(1);
}

const commonCommit = shell.exec('git merge-base origin/master HEAD', { silent: true }).stdout;

const getJsFileNames = str => str.split('\n').filter(filename => path.parse(filename).ext === '.js');

const changed = getJsFileNames(shell.exec(`git diff --name-only ${commonCommit}`, { silent: true }).stdout);
const untracked =
    getJsFileNames(shell.exec('git status -s | sed "s/?? //g" | sed "s/[M|D|A|??] //g"', { silent: true }).stdout);

const filesToLint = changed.concat(untracked);

if (filesToLint.length) {
    const cli = new CLIEngine({ useEslintrc: true });
    const report = cli.executeOnFiles(filesToLint);

    if (report.errorCount || report.warningCount) {
        console.log(formatter(report.results));
    } else {
        console.log('\x1b[32m%s\x1b[0m', "No lint errors. You've earned a gold star!");
    }
} else {
    console.log('\x1b[32m%s\x1b[0m', 'Nothing to lint');
}
