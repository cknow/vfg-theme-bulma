import theme from './theme';

const VfgThemeBulma = {
    install: Vue => {
        if (!Vue.$vfg) {
            throw new Error('Vfg not found. See https://github.com/cknow/vfg-theme-bulma');
        }

        Vue.$vfg.addTheme('bulma', theme);
    }
};

/* eslint-disable no-undef */
/* istanbul ignore next */
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(VfgThemeBulma);
}
/* eslint-enable no-undef */

export default VfgThemeBulma;
