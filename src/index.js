import theme from './theme';

const vfgTheme = {
    install: Vue => {
        Vue.$vfg.addTheme('bulma', theme);
    }
};

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(vfgTheme);
}

export default vfgTheme;
