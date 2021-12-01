var fs = require('fs')


const add = () => {
    var tailwindBuffer = fs.readFileSync("./tailwind.config.js");
    // console.log("work done");
    // read file buffer to string
    tailwindFile = tailwindBuffer.toString();
    // finds opening bracket for export module
    moduleExports = tailwindFile.search(/ {/)
    // truncate the file to only contain the exports json
    exportString = tailwindFile.slice(moduleExports);
    // turn the keys into strings so it can be converted to json
    // exportJSONReady = exportString.replace("\w+", "$&t");
    exportJSON = JSON.stringify(exportString);
    console.log(exportJSON);

    // find the key for daisyUI to make sure it was installed
    // daisyUI = tailwindFile.search(/daisyui: /)
    // console.log(daisyUI)
    // if(daisyUI != -1){
    //     installedThemesIndex = tailwindFile.search(/themes: /)
    //     installedThemes = tailwindFile.slice(installedThemesIndex+16)
    //     console.log(installedThemes)
    //     // JSON.parse(installedThemes)
    // }
    // else {
    //     console.error("DaisyUI is not installed");
    // }

}

module.exports = add