var fs = require('fs')
const tailwindConfigLocation = "./tailwind.config.js"

const list = () => {
 
    var fileBuffer = fs.readFileSync(tailwindConfigLocation)
    // read the file into string
    tailwindConfig = fileBuffer.toString()
    // finds opening bracket for the themes field
    themesOpenIndex = tailwindConfig.search(/themes: \[/) + 9
    // split the file and store the tail
    tailwindConfigTail = tailwindConfig.slice(themesOpenIndex, -1)
    // find the closing bracket of the themes field
    //this value is the index in the tail, so we add themesOpenIndex to compensate 
    themesCloseIndex = tailwindConfigTail.search(/]/) + themesOpenIndex
    // find the index of the custom themes opening bracket, inside the themes array
    customThemesIndex = tailwindConfig.slice(themesOpenIndex).search('{') + themesOpenIndex
    // store the string of the map
    customThemesString = tailwindConfig.slice(themesOpenIndex, themesCloseIndex).replaceAll("'", "\"")
    // turn that JSON string into an object 
    customThemesObject = JSON.parse(customThemesString)


    Object.keys(customThemesObject).forEach( keys => console.log(keys))

    // find the index of the closing bracket
    // console.log(customThemesMap)
}

module.exports = list