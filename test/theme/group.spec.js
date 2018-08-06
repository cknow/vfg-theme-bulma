import { createComponent } from '../helpers';

describe('theme -> group', () => {
    let wrapper;

    beforeAll(() => {
        wrapper = createComponent({
            schema: [{
                legend: 'Legend',
                group: {
                    fields: [{
                        label: 'Name'
                    }, {
                        label: 'E-mail',
                        inputType: 'email'
                    }]
                }
            }]
        });
    });

    test('check elements length', () => {
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.is('div')).toBe(true);
        expect(wrapper.findAll('fieldset')).toHaveLength(1);
        expect(wrapper.findAll('fieldset>legend')).toHaveLength(1);
        expect(wrapper.findAll('fieldset>.form-group')).toHaveLength(2);
        expect(wrapper.findAll('fieldset>div>label')).toHaveLength(2);
        expect(wrapper.findAll('fieldset>div>input')).toHaveLength(2);
    });

    test('check header', () => {
        expect(wrapper.find('fieldset').exists()).toBe(true);
        expect(wrapper.find('fieldset>legend').exists()).toBe(true);
        expect(wrapper.find('fieldset>legend').text()).toBe('Legend');
    });

    test('check name field', () => {
        const container = wrapper.findAll('fieldset>.form-group').at(0);

        expect(container.exists()).toBe(true);
        expect(container.is('div')).toBe(true);
        expect(container.classes()).toContain('form-group');

        expect(container.find('label').exists()).toBe(true);
        expect(container.find('label').attributes().for).toBe('name');
        expect(container.find('label').text()).toBe('Name');

        expect(container.find('input').exists()).toBe(true);
        expect(container.find('input').classes()).toContain('form-control');
        expect(container.find('input').attributes().id).toBe('name');
        expect(container.find('input').attributes().type).toBe('text');
    });

    test('check email field', () => {
        const container = wrapper.findAll('fieldset>.form-group').at(1);

        expect(container.exists()).toBe(true);
        expect(container.is('div')).toBe(true);
        expect(container.classes()).toContain('form-group');

        expect(container.find('label').exists()).toBe(true);
        expect(container.find('label').attributes().for).toBe('e-mail');
        expect(container.find('label').text()).toBe('E-mail');

        expect(container.find('input').exists()).toBe(true);
        expect(container.find('input').classes()).toContain('form-control');
        expect(container.find('input').attributes().id).toBe('e-mail');
        expect(container.find('input').attributes().type).toBe('email');
    });
});
