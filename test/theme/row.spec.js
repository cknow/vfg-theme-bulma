import { createComponent } from '../helpers';

describe('theme -> row', () => {
    let wrapper;

    beforeAll(() => {
        wrapper = createComponent({
            schema: [{
                row: {
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
        expect(wrapper.findAll('div>.form-row')).toHaveLength(1);
        expect(wrapper.findAll('div>div>.form-group')).toHaveLength(2);
        expect(wrapper.findAll('div>div>.col')).toHaveLength(2);
        expect(wrapper.findAll('div>div>div>label')).toHaveLength(2);
        expect(wrapper.findAll('div>div>div>input')).toHaveLength(2);
    });

    test('check name field', () => {
        const container = wrapper.findAll('.form-row>div').at(0);

        expect(container.exists()).toBe(true);
        expect(container.is('div')).toBe(true);

        expect(container.find('.form-group').exists()).toBe(true);
        expect(container.find('.col').exists()).toBe(true);

        expect(container.find('label').exists()).toBe(true);
        expect(container.find('label').attributes().for).toBe('name');
        expect(container.find('label').text()).toBe('Name');

        expect(container.find('input').exists()).toBe(true);
        expect(container.find('input').classes()).toContain('form-control');
        expect(container.find('input').attributes().id).toBe('name');
        expect(container.find('input').attributes().type).toBe('text');
    });

    test('check email field', () => {
        const container = wrapper.findAll('.form-row>div').at(1);

        expect(container.exists()).toBe(true);
        expect(container.is('div')).toBe(true);

        expect(container.find('.form-group').exists()).toBe(true);
        expect(container.find('.col').exists()).toBe(true);

        expect(container.find('label').exists()).toBe(true);
        expect(container.find('label').attributes().for).toBe('e-mail');
        expect(container.find('label').text()).toBe('E-mail');

        expect(container.find('input').exists()).toBe(true);
        expect(container.find('input').classes()).toContain('form-control');
        expect(container.find('input').attributes().id).toBe('e-mail');
        expect(container.find('input').attributes().type).toBe('email');
    });
});
