#! /usr/bin/env node

// Now we'll use commander to create a cli, first importing program
const { program } = require('commander')
const add = require('./commands/add')

program
    .command('add')
    .description("add a daisyUI theme to tailwind.config.js")
    .action(add)

program.parse()