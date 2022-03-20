var fs = require('fs')
const chalk = require('chalk')
const blossomTheme = require('../themes/blossom')
const utils = require('../utils/utils')
const node_util = require('util')

const init2 = () => {
    // declare the string that will be writen to file
    var finalFileContents
    // learn which file extension the tailwind config is using
    var fileLocation = utils.getTailwindConfigLocation()

    const objects = require('../tailwind.config.cjs')

    console.log(node_util.inspect(objects))
}

module.exports = init2