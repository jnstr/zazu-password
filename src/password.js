module.exports = (pluginContext) => {
    return (query, env = {}) => {
        query = query || '';

        // the default parameters
        let length = 16,
            strength = 'average';

        // all possible values for the password strenth
        const strengthOptions = ['easy','weak', 'normal', 'average', 'hard', 'strong'];

        // check if we need to override the length & strength
        if (env['strength'] && strengthOptions.includes(env['strength'])) {
            strength = env['strength'];
        }
        if (env['length'] && !isNaN(parseFloat(env['length'])) && isFinite(env['length'])) {
            length = env['length']
        }

        // get the length & strenth from the query (this should be optimized)
        const terms = query.split(' ');
        const lengths = terms.filter(term => (!isNaN(parseFloat(term)) && isFinite(term)));
        const strengths = terms.filter(term => strengthOptions.includes(term.toLowerCase()));   
        if (lengths.length) {
            length = lengths[0];
        }
        if (strengths.length) {
            strength = strengths[0];
        }

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

        // we're done here
        return new Promise((resolve, reject) => {
            resolve([
                {
                    icon: 'fa-key',
                    title: password,
                    subtitle: `We generated a ${strength} password of ${length} characters`,
                    value: password,
                },
            ])
        })
    }
}
