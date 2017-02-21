module.exports = (strength, length) => {
    strength = strength || 'average';
    length = length || 16;

    // build the charaters we'll use to generate the password
    let characters = '';
    switch (strength) {
        case 'hard':
        case 'strong':
            characters += '!@#$%^&*()';
        case 'normal':
        case 'average':
            // exclude numbers which can be easily visually confused
            characters += '23456789';
        default:
            // exclude characters which can be easily visually confused
            characters += 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
    }

    // generate the password
    password = '';
    for (var i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return password;
}