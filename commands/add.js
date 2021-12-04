var fs = require('fs')
const chalk = require('chalk')
const utils = require('../utils/utils')
const tailwindConfigLocation = utils.getTailwindConfigLocation()
const marsTheme = require('../themes/mars')
const xmasTheme = require('../themes/xmas')
const adventureTimeTheme = require('../themes/adventureTime')

const add = (theme) => {

    var chosenTheme = ''
    // search the themes directory the for given theme
    fs.readdir(__dirname + "/../themes/", (err, files) => {
        if(err){
            // if the directory is not found, return an error and exit
            console.error(err)
            process.exit(1)
        } else if(files.includes(`${theme}.json`)) {
            // if the customTheme is found, continue the process of modifying tailwind.config
            // else exit and return an error 
            themePath = `${__dirname}/../themes/${theme}.json`
            chosenTheme = require(themePath)

            // find the tailwind config file
            var tailwindBuffer = fs.readFileSync(tailwindConfigLocation);
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
            // find the index of the custom themes opening bracket, inside the themes array
            customThemesIndex = tailwindConfig.slice(themesOpenIndex).search('{') + themesOpenIndex
            // store the string of everything inside the themes array
            customThemesString = tailwindConfig.slice(themesOpenIndex, themesCloseIndex).replaceAll("'", "\"")
            // find the closing brace for custom themes map
            customThemesMapClosingIndex = customThemesString.lastIndexOf("}") + 1
            // turn that JSON string into an object 
            customThemesObject = JSON.parse(customThemesString.slice(0, customThemesMapClosingIndex))
            // add the requested theme to the list
            customThemesObject = {...customThemesObject, ...chosenTheme}
            // store the string after the themes array closing bracket
            tailwindConfigAfterThemes = tailwindConfig.slice(customThemesMapClosingIndex + themesOpenIndex)
            // write these changes to the file
            try {
                fs.writeFileSync(tailwindConfigLocation, tailwindConfigBeforeThemes + JSON.stringify(customThemesObject) + tailwindConfigAfterThemes)
                console.log(chalk.blue(`Added ${theme} to theme's list`))
            } catch (err) {
                console.error(err)
            }
        } else {

        }
    })

                console.log(chosenTheme)


}

module.exports = add