import { mount, createLocalVue } from '@vue/test-utils';

import Vfg from '@cknow/vfg';
import VfgThemeBulma from '@/';

const localVue = createLocalVue();

localVue.use(Vfg, {
    theme: 'bulma'
});
localVue.use(VfgThemeBulma);

export function createComponent(data) {
    const Component = {
        template: `<vfg :schema="schema"></vfg>`,
        data() {
            return data;
        }
    };

    return mount(Component, {
        localVue
    });
}
