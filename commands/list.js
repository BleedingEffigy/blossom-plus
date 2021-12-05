var fs = require('fs')
const chalk = require('chalk')
const utils = require('../utils/utils')
const tailwindConfigLocation = utils.getTailwindConfigLocation() 

/**
 * lists all installed custom themes
 */
const list = () => {
 
    var fileBuffer = fs.readFileSync(tailwindConfigLocation)
    // read the file into string
    tailwindConfig = fileBuffer.toString()
    // finds opening bracket for the themes field and saves index infront
    themesOpenIndex = tailwindConfig.search(/themes: \[/) + 9
    // split the file and store the tail
    tailwindConfigTail = tailwindConfig.slice(themesOpenIndex, -1)
    // find the closing bracket of the themes field
    //this value is the index in the tail, so we add themesOpenIndex to compensate 
    themesCloseIndex = tailwindConfigTail.search(/]/) + themesOpenIndex
    // find the index of the custom themes opening bracket, inside the themes array
    customThemesMapOpenIndex = tailwindConfig.slice(themesOpenIndex).search('{') + themesOpenIndex
    // store the string of the map, replacing single quotes with double for the parser
    customThemesString = tailwindConfig.slice(themesOpenIndex, themesCloseIndex).replaceAll("'", "\"")
    // find the closing bracket of the themes map
    customThemesMapCloseIndex = customThemesString.lastIndexOf('}') + 1
    // turn that JSON string into an object 
    customThemesObject = JSON.parse(customThemesString.slice(0, customThemesMapCloseIndex))
    // list the names of the installed themes
    Object.keys(customThemesObject).forEach( keys => console.log(chalk.red.underline(keys)))

    // find the index of the closing bracket
    // console.log(customThemesMap)
}

module.exports = list