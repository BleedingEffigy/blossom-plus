var fs = require('fs')
const chalk = require('chalk')
const tailwindConfigLocation = "./tailwind.config.js"
const marsTheme = require('../themes/mars')
const xmasTheme = require('../themes/xmas')
const adventureTimeTheme = require('../themes/adventureTime')

const add = (theme) => {

// a switch to retrieve the inputted theme
    let chosenTheme = ''
    switch(theme) {
        case 'mars':
            chosenTheme = marsTheme
            break;
        case 'xmas':
            chosenTheme = xmasTheme
            break;
        case 'adventure-time':
            chosenTheme = adventureTimeTheme
            break;
        default:
            chosenTheme = marsTheme
    }
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
    userCustomThemeObject = JSON.parse(chosenTheme.replaceAll("'","\""))
    // add the requested theme to the list
    customThemesObject = {...customThemesObject, ...userCustomThemeObject}
    // write these changes to the file
     try {
        fs.writeFileSync(tailwindConfigLocation, tailwindConfigBeforeThemes + JSON.stringify(customThemesObject) + tailwindConfigAfterThemes)
        console.log(chalk.blue(`Added ${theme} to theme's list`))
    } catch (err) {
        console.error(err)
    }

}

module.exports = add