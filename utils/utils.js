var fs = require('fs')

exports.getTailwindConfigLocation = () => {
    const tailwindConfigLocation = "./tailwind.config.js"
    const tailwindCommonJSConfigLocation = "./tailwind.config.cjs"
    try {
        if (fs.existsSync(tailwindConfigLocation)) {
             return tailwindConfigLocation
        } else if (fs.existsSync(tailwindCommonJSConfigLocation)){
            return tailwindCommonJSConfigLocation
        }
    } catch(err) {
        console.error(err)
        process.exit(1)
    }
}
