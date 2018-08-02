module.exports = {
    extends: [
        '@cknow/eslint-config',
        '@cknow/eslint-config/plugins/vue'
    ],
    globals: {
        window: true
    },
    rules: {
        'require-jsdoc': 'off'
    }
};
