import { createLocalVue } from '@vue/test-utils';
import Vfg from '@cknow/vfg';
import VfgThemeBulma from '@/';

describe('module', () => {
    test('module properties', () => {
        expect(VfgThemeBulma).toBeTruthy();
        expect(VfgThemeBulma).toHaveProperty('install');
        expect(VfgThemeBulma.install).toBeInstanceOf(Function);
    });

    test('install', () => {
        const localVue = createLocalVue();

        localVue.use(Vfg);

        expect(localVue.$vfg.hasTheme('bulma')).toBe(false);

        localVue.use(VfgThemeBulma);

        expect(localVue.$vfg.hasTheme('bulma')).toBe(true);
    });

    test('vfg not found', () => {
        expect(() => {
            createLocalVue().use(VfgThemeBulma);
        }).toThrow('Vfg not found.');
    });
});
