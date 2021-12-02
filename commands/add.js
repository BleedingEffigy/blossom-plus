var fs = require('fs')
const marsTheme = require('../themes/mars')
const xmasTheme = require('../themes/xmas')

const add = () => {
    var tailwindBuffer = fs.readFileSync("./tailwind.config.js");
    // read the file into string
    tailwindConfig = tailwindBuffer.toString()
    // finds opening bracket for the themes field
    themesOpenIndex = tailwindConfig.search(/themes: \[/) + 9
    // split the file at the themes array bracket, and store the head ...
    tailwindConfigBeforeThemes = tailwindConfig.slice(0, themesOpenIndex)
    // and now store the tail
    tailwindConfigTail = tailwindConfig.slice(themesOpenIndex)
    // find the closing bracket of the themes field
    //this value is the index in the tail, so we add themesOpenIndex to compensate 
    themesCloseIndex = tailwindConfigTail.search(/]/) + themesOpenIndex
    // store the string after the themes array closing bracket
    tailwindConfigAfterThemes = tailwindConfig.slice(themesCloseIndex)
    // find the index of the custom themes opening bracket, inside the themes array
    customThemesIndex = tailwindConfig.slice(themesOpenIndex).search('{') + themesOpenIndex
    // store the string of the map
    customThemesString = tailwindConfig.slice(themesOpenIndex, themesCloseIndex).replaceAll("'", "\"")
    // turn that JSON string into an object 
    customThemesObject = JSON.parse(customThemesString)
    //get the user selected theme and turn into object, changing any single-quotes to double so the parser works
    userCustomThemeObject = JSON.parse(xmasTheme.replaceAll("'","\""))
    // add the requested theme to the list
    customThemesObject = {...customThemesObject, ...userCustomThemeObject}

    console.log(tailwindConfigBeforeThemes + JSON.stringify(customThemesObject) + tailwindConfigAfterThemes);

}

module.exports = add