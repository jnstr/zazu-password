var generatePassword = require('./generate-password.js');

module.exports = (pluginContext) => {
    return {
        respondsTo: (query, env) => {
            // check if the query starts with the desired prefix
            return query.startsWith('password') || query.startsWith('pass') || query.startsWith('pwd');
        },
        search: (query, env = {}) => {
            query = query || '';

            // the default parameters
            let length = 16,
                strength = 'average';

            // all possible values for the password strenth
            const strengthOptions = ['easy', 'weak', 'normal', 'average', 'hard', 'strong'];

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

            // insecure = send password as zazu value (which puts in in the zazu logs)
            let title = 'Password generated!',
                value = JSON.stringify({ strength, length });
            if (env['insecure'] === true) {
                // generate the password
                title = value = generatePassword(strength, length);
            }

            // we're done here
            return new Promise((resolve, reject) => {
                resolve([
                    {
                        icon: 'assets/icon.png',
                        title: title,
                        subtitle: `Select to copy the ${strength} password of ${length} characters`,
                        value: value,
                    },
                ])
            });
        }
    }
}
