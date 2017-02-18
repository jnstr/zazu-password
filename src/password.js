module.exports = (pluginContext) => {
    return (query, env = {}) => {

        // the default parameters
        let length = 16,
            strength = "normal";

        // generate the password
        let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
        password = '';
        for (var i = 0; i < length; i++) {
            password += characters.charAt(Math.floor(Math.random() * characters.length));
        }

        // we're done here
        return new Promise((resolve, reject) => {
            resolve([
                {
                    icon: 'fa-key',
                    title: password,
                    subtitle: `We generated a ${strength} password of ${length} characters`,
                },
            ])
        })
    }
}
