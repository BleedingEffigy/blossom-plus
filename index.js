#! /usr/bin/env node

// Now we'll use commander to create a cli, first importing program
const { program } = require('commander')
const add = require('./commands/add')
const init = require('./commands/init')

program
    .command('add')
    .description("add a daisyUI theme to tailwind.config.js")
    .action(add)
    
program    
    .command('init')
    .description("initiliaze daisyUI and setup themeing")
    .action(init)

program.parse()