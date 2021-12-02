var fs = require('fs')
const marsTheme = require('../themes/mars')

const tailwindConfigLocation = "./tailwind.config.js"
const daisyRequireString = '\n    require(\'daisyui\'),\n  '
const daisyThemeString = `,
  daisyui: {
    themes: [
        {
        ${marsTheme}
        }
    ],
  },\n`

const init = () => {
    // declare the string that will be writen to file
    var finalFileContents
    // read the tailwind config file into buffer
    var fileBuffer = fs.readFileSync(tailwindConfigLocation)
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

    // build file contents dependent on whether daisyUI is installed
    finalFileContents = !daisyUIinstalled ? configHead+daisyRequireString+configTail
                        : configHead+configTail        

    // check if daisyui object exists
    daisyObjectExists = finalFileContents.search('daisyui:') != -1
    // if the object doesn't exist, insert a daisyui object with a theme value 
    // and a theme preloaded
    if(!daisyObjectExists) {
        finalFileContents = finalFileContents.slice(0,-2) + daisyThemeString + '\n}'
    } 
    console.log(finalFileContents)
    // write file to contents
    try {
        fs.writeFileSync(tailwindConfigLocation, finalFileContents)
    } catch (err) {
        console.error(err)
    }

    console.log(daisyObjectExists)    
    //close the file connections
}

module.exports = init