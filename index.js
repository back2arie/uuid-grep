#!/usr/bin/env node

function uuidGrep() {

    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: false
    });

    const uuidRegex = new RegExp(/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/g);

    rl.on('line', (line) => {
        const uuidMatches = uuidRegex.exec(line);

        if (uuidMatches) {
            console.log(uuidMatches["input"]);
        }
    });
}

uuidGrep()

module.exports = uuidGrep