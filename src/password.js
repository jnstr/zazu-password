var generatePassword = require('./generate-password.js');


module.exports = (pluginContext) => {
    return (value, env = {}) => {
        return new Promise((resolve, reject) => {
            // cache the password
            let password = value;

            // normal behaviour means we get a json string instead of the password
            if (env['insecure'] !== true) {
                // use the data from the json string to generate the password
                value = JSON.parse(value);
                password = generatePassword(value.strength, value.length);
            }

            // save the password to the clipboard
            const clipboard = pluginContext.clipboard;
            resolve(clipboard.writeText(password));
        });
    }
}