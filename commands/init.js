var fs = require('fs')

const init = () => {
    // read the tailwind config file into buffer
    var fileBuffer = fs.readFileSync("./tailwind.config.js")
    tailwindConfig = fileBuffer.toString()
    // finds opening bracket for export module
    moduleExports = tailwindConfig.search(/ {/)
    // truncate the file to only contain the exports json
    exportString = tailwindConfig.slice(moduleExports);
    // turn the keys into strings so it can be converted to json
    // exportJSONReady = exportString.replace("\w+", "$&t");
    exportJSON = JSON.stringify(exportString);
    console.log(exportJSON);
    
    //close the file connections
}

module.exports = init