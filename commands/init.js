var fs = require('fs')
const chalk = require('chalk')
const marsTheme = require('../themes/mars')
const utils = require('../utils/utils')

const tailwindConfigLocation = "./tailwind.config.js"
const tailwindCommonJSConfigLocation = "./tailwind.config.cjs"
const daisyRequireString = '\n    require(\'daisyui\'),\n  '
const daisyThemeString = `,
  daisyui: {
    themes: [
        ${marsTheme},
        light,
        dark,
        cupcake,
        bumblebee,
        emerald,
        corporate,
        synthwave,
        retro,
        cyberpunk,
        valentine,
        halloween,
        garden,
        forest,
        aqua,
        lofi,
        pastel,
        fantasy,
        wireframe,
        black,
        luxury,
        dracula,
        cmyk
    ],
  },\n`

const init = () => {
    // declare the string that will be writen to file
    var finalFileContents
    // learn which file extension the tailwind config is using
    var fileLocation = utils.getTailwindConfigLocation()


    // read the tailwind config file into buffer
    var fileBuffer = fs.readFileSync(fileLocation)
    // read the file into string
    tailwindConfig = fileBuffer.toString()
    // finds opening bracket for the plugins field
    pluginsIndex = tailwindConfig.search(/plugins: \[/) + 10
    // store first half of file before opening bracket
    configHead = tailwindConfig.slice(0,pluginsIndex) 
    //store the remainder of the file after opening bracket
    configTail = tailwindConfig.slice(pluginsIndex)
    // search tail for daisyui plugin
    // in the regex we have to escape the paranthesis so we're not grouping
    daisyUIinstalled = configTail.search(/require\('daisyui'\)/) != -1
    // announce adding daisyUI plugin, using chalk for styling
    if (!daisyUIinstalled) console.log(chalk.magenta.bold("Adding daisyui to plugins list in tailwind.config.js"))

    // build file contents dependent on whether daisyUI is installed
    finalFileContents = !daisyUIinstalled ? configHead+daisyRequireString+configTail
                        : configHead+configTail        

    // check if daisyui object exists
    daisyObjectExists = finalFileContents.search('daisyui:') != -1
    // if the object doesn't exist, insert a daisyui object with a theme value 
    // and a theme preloaded
    if(!daisyObjectExists) {
        finalFileContents = finalFileContents.slice(0,-2) + daisyThemeString + '\n}'
        console.log(chalk.blue.bold("Adding daisyui object to tailwind.config.js"))
    } 
    // write file to contents
    try {
        fs.writeFileSync(fileLocation, finalFileContents)
    } catch (err) {
        console.error(err)
    }

    //close the file connections
}

module.exports = init