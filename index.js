#! /usr/bin/env node

// Now we'll use commander to create a cli, first importing program
const { program } = require('commander')
const add = require('./commands/add')
const init = require('./commands/init')
const list = require('./commands/list')

program
    .command('add')
    .description("add a daisyUI theme to tailwind.config.js")
    .action(add)
    
program    
    .command('init')
    .description("initiliaze daisyUI and setup themeing")
    .action(init)

program
    .command('list')
    .description("list currently installed themes")
    .action(list)

program.parse()