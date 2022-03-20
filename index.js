#! /usr/bin/env node

// Now we'll use commander to create a cli, first importing program
const { program } = require('commander')
const add = require('./commands/add')
const init = require('./commands/init')
const init2 = require('./commands/init2')
const list = require('./commands/list')

program
    .command('add <theme>')
    .description("add a daisyUI theme to tailwind.config.js")
    .action(add)
    
program    
    .command('init')
    .description("initiliaze daisyUI and setup theming")
    .action(init)
program    
    .command('init2')
    .description("initiliaze daisyUI and setup theming")
    .action(init2)
program
    .command('list')
    .description("list currently installed themes")
    .action(list)
program.version(process.env.npm_package_version)

program.parse()