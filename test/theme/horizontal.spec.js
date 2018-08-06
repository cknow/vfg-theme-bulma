import { createComponent } from '../helpers';

describe('theme -> horizontal', () => {
    let wrapper;

    beforeAll(() => {
        wrapper = createComponent({
            schema: [{
                horizontal: true,
                label: 'Name'
            }, {
                horizontal: true,
                label: 'E-mail',
                inputType: 'email'
            }, {
                horizontal: true,
                label: 'Checkbox',
                inputType: 'checkbox'
            }, {
                horizontal: true,
                label: 'Radio',
                inputType: 'radio'
            }, {
                horizontal: true,
                label: 'Button',
                inputType: 'button'
            }, {
                horizontal: true,
                label: 'Image',
                inputType: 'image'
            }, {
                horizontal: true,
                label: 'Submit',
                inputType: 'submit'
            }, {
                horizontal: true,
                custom: true,
                label: 'Custom Checkbox',
                inputType: 'checkbox'
            }, {
                horizontal: true,
                custom: true,
                label: 'Custom Radio',
                inputType: 'radio'
            }, {
                horizontal: true,
                custom: true,
                label: 'Custom Range',
                inputType: 'range'
            }, {
                horizontal: true,
                custom: true,
                label: 'Custom File',
                inputType: 'file'
            }]
        });
    });

    test('check elements length', () => {
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.is('div')).toBe(true);
        expect(wrapper.findAll('div>.form-group')).toHaveLength(11);
        expect(wrapper.findAll('div>.row')).toHaveLength(11);
        expect(wrapper.findAll('div>div>.col-sm-10')).toHaveLength(11);
        expect(wrapper.findAll('div>div>.col-sm-2')).toHaveLength(8);
        expect(wrapper.findAll('div>div>label')).toHaveLength(8);
        expect(wrapper.findAll('div>div>input')).toHaveLength(11);
    });

    test('check name field', () => {
        const container = wrapper.findAll('div>.form-group').at(0);

        expect(container.exists()).toBe(true);
        expect(container.is('div')).toBe(true);
        expect(container.classes()).toContain('form-group');
        expect(container.classes()).toContain('row');

        expect(container.find('.col-sm-10').exists()).toBe(true);

        expect(container.find('label').exists()).toBe(true);
        expect(container.find('label').classes()).toContain('col-form-label');
        expect(container.find('label').classes()).toContain('col-sm-2');
        expect(container.find('label').attributes().for).toBe('name');
        expect(container.find('label').text()).toBe('Name');

        expect(container.find('input').exists()).toBe(true);
        expect(container.find('input').classes()).toContain('form-control');
        expect(container.find('input').attributes().id).toBe('name');
        expect(container.find('input').attributes().type).toBe('text');
    });

    test('check email field', () => {
        const container = wrapper.findAll('div>.form-group').at(1);

        expect(container.exists()).toBe(true);
        expect(container.is('div')).toBe(true);
        expect(container.classes()).toContain('form-group');
        expect(container.classes()).toContain('row');

        expect(container.find('.col-sm-10').exists()).toBe(true);

        expect(container.find('label').exists()).toBe(true);
        expect(container.find('label').classes()).toContain('col-form-label');
        expect(container.find('label').classes()).toContain('col-sm-2');
        expect(container.find('label').attributes().for).toBe('e-mail');
        expect(container.find('label').text()).toBe('E-mail');

        expect(container.find('input').exists()).toBe(true);
        expect(container.find('input').classes()).toContain('form-control');
        expect(container.find('input').attributes().id).toBe('e-mail');
        expect(container.find('input').attributes().type).toBe('email');
    });

    test('check checkbox field', () => {
        const container = wrapper.findAll('div>.form-group').at(2);

        expect(container.exists()).toBe(true);
        expect(container.is('div')).toBe(true);
        expect(container.classes()).toContain('form-group');
        expect(container.classes()).toContain('row');

        expect(container.find('.col-sm-2').exists()).toBe(true);
        expect(container.find('.col-sm-10').exists()).toBe(true);
        expect(container.find('.form-check').exists()).toBe(true);

        expect(container.find('label').exists()).toBe(true);
        expect(container.find('label').classes()).toContain('form-check-label');
        expect(container.find('label').classes()).not.toContain('col-form-label');
        expect(container.find('label').classes()).not.toContain('col-sm-2');
        expect(container.find('label').attributes().for).toBe('checkbox');
        expect(container.find('label').text()).toBe('Checkbox');

        expect(container.find('input').exists()).toBe(true);
        expect(container.find('input').classes()).toContain('form-check-input');
        expect(container.find('input').classes()).not.toContain('form-control');
        expect(container.find('input').attributes().id).toBe('checkbox');
        expect(container.find('input').attributes().type).toBe('checkbox');
    });

    test('check radio field', () => {
        const container = wrapper.findAll('div>.form-group').at(3);

        expect(container.exists()).toBe(true);
        expect(container.is('div')).toBe(true);
        expect(container.classes()).toContain('form-group');
        expect(container.classes()).toContain('row');

        expect(container.find('.col-sm-2').exists()).toBe(true);
        expect(container.find('.col-sm-10').exists()).toBe(true);
        expect(container.find('.form-check').exists()).toBe(true);

        expect(container.find('label').exists()).toBe(true);
        expect(container.find('label').classes()).toContain('form-check-label');
        expect(container.find('label').classes()).not.toContain('col-form-label');
        expect(container.find('label').classes()).not.toContain('col-sm-2');
        expect(container.find('label').attributes().for).toBe('radio');
        expect(container.find('label').text()).toBe('Radio');

        expect(container.find('input').exists()).toBe(true);
        expect(container.find('input').classes()).toContain('form-check-input');
        expect(container.find('input').classes()).not.toContain('form-control');
        expect(container.find('input').attributes().id).toBe('radio');
        expect(container.find('input').attributes().type).toBe('radio');
    });

    test('check button field', () => {
        const container = wrapper.findAll('div>.form-group').at(4);

        expect(container.exists()).toBe(true);
        expect(container.is('div')).toBe(true);
        expect(container.classes()).toContain('form-group');
        expect(container.classes()).toContain('row');

        expect(container.find('.col-sm-2').exists()).toBe(false);
        expect(container.find('.col-sm-10').exists()).toBe(true);
        expect(container.find('.offset-md-2').exists()).toBe(true);

        expect(container.find('label').exists()).toBe(false);

        expect(container.find('input').exists()).toBe(true);
        expect(container.find('input').classes()).toContain('btn');
        expect(container.find('input').classes()).not.toContain('form-control');
        expect(container.find('input').attributes().id).toBe('button');
        expect(container.find('input').attributes().type).toBe('button');
    });

    test('check image field', () => {
        const container = wrapper.findAll('div>.form-group').at(5);

        expect(container.exists()).toBe(true);
        expect(container.is('div')).toBe(true);
        expect(container.classes()).toContain('form-group');
        expect(container.classes()).toContain('row');

        expect(container.find('.col-sm-2').exists()).toBe(false);
        expect(container.find('.col-sm-10').exists()).toBe(true);
        expect(container.find('.offset-md-2').exists()).toBe(true);

        expect(container.find('label').exists()).toBe(false);

        expect(container.find('input').exists()).toBe(true);
        expect(container.find('input').classes()).not.toContain('form-control');
        expect(container.find('input').attributes().id).toBe('image');
        expect(container.find('input').attributes().type).toBe('image');
    });

    test('check submit field', () => {
        const container = wrapper.findAll('div>.form-group').at(6);

        expect(container.exists()).toBe(true);
        expect(container.is('div')).toBe(true);
        expect(container.classes()).toContain('form-group');
        expect(container.classes()).toContain('row');

        expect(container.find('.col-sm-2').exists()).toBe(false);
        expect(container.find('.col-sm-10').exists()).toBe(true);
        expect(container.find('.offset-md-2').exists()).toBe(true);

        expect(container.find('label').exists()).toBe(false);

        expect(container.find('input').exists()).toBe(true);
        expect(container.find('input').classes()).toContain('btn');
        expect(container.find('input').classes()).not.toContain('form-control');
        expect(container.find('input').attributes().id).toBe('submit');
        expect(container.find('input').attributes().type).toBe('submit');
    });

    test('check custom checkbox field', () => {
        const container = wrapper.findAll('.form-group').at(7);

        expect(container.exists()).toBe(true);
        expect(container.is('div')).toBe(true);
        expect(container.classes()).toContain('form-group');
        expect(container.classes()).toContain('row');

        expect(container.find('.col-sm-2').exists()).toBe(true);
        expect(container.find('.col-sm-10').exists()).toBe(true);
        expect(container.find('.custom-control').exists()).toBe(true);
        expect(container.find('.custom-checkbox').exists()).toBe(true);
        expect(container.find('.form-check').exists()).toBe(false);

        expect(container.find('label').exists()).toBe(true);
        expect(container.find('label').classes()).toContain('custom-control-label');
        expect(container.find('label').classes()).not.toContain('form-check-label');
        expect(container.find('label').attributes().for).toBe('custom-checkbox');
        expect(container.find('label').text()).toBe('Custom Checkbox');

        expect(container.find('input').exists()).toBe(true);
        expect(container.find('input').classes()).toContain('custom-control-input');
        expect(container.find('input').classes()).not.toContain('form-check-input');
        expect(container.find('input').attributes().id).toBe('custom-checkbox');
        expect(container.find('input').attributes().type).toBe('checkbox');
    });

    test('check custom radio field', () => {
        const container = wrapper.findAll('.form-group').at(8);

        expect(container.exists()).toBe(true);
        expect(container.is('div')).toBe(true);
        expect(container.classes()).toContain('form-group');
        expect(container.classes()).toContain('row');

        expect(container.find('.col-sm-2').exists()).toBe(true);
        expect(container.find('.col-sm-10').exists()).toBe(true);
        expect(container.find('.custom-control').exists()).toBe(true);
        expect(container.find('.custom-radio').exists()).toBe(true);
        expect(container.find('.form-check').exists()).toBe(false);

        expect(container.find('label').exists()).toBe(true);
        expect(container.find('label').classes()).toContain('custom-control-label');
        expect(container.find('label').classes()).not.toContain('form-check-label');
        expect(container.find('label').attributes().for).toBe('custom-radio');
        expect(container.find('label').text()).toBe('Custom Radio');

        expect(container.find('input').exists()).toBe(true);
        expect(container.find('input').classes()).toContain('custom-control-input');
        expect(container.find('input').classes()).not.toContain('form-check-input');
        expect(container.find('input').attributes().id).toBe('custom-radio');
        expect(container.find('input').attributes().type).toBe('radio');
    });

    test('check custom range field', () => {
        const container = wrapper.findAll('.form-group').at(9);

        expect(container.exists()).toBe(true);
        expect(container.is('div')).toBe(true);
        expect(container.classes()).toContain('form-group');
        expect(container.classes()).toContain('row');

        expect(container.find('.col-sm-2').exists()).toBe(true);
        expect(container.find('.col-sm-10').exists()).toBe(true);

        expect(container.find('label').exists()).toBe(true);
        expect(container.find('label').classes()).toContain('col-sm-2');
        expect(container.find('label').classes()).not.toContain('col-form-label');
        expect(container.find('label').attributes().for).toBe('custom-range');
        expect(container.find('label').text()).toBe('Custom Range');

        expect(container.find('input').exists()).toBe(true);
        expect(container.find('input').classes()).toContain('custom-range');
        expect(container.find('input').classes()).not.toContain('form-control-range');
        expect(container.find('input').attributes().id).toBe('custom-range');
        expect(container.find('input').attributes().type).toBe('range');
    });

    test('check custom file field', () => {
        const container = wrapper.findAll('.form-group').at(10);

        expect(container.exists()).toBe(true);
        expect(container.is('div')).toBe(true);
        expect(container.classes()).toContain('form-group');
        expect(container.classes()).toContain('row');

        expect(container.find('.col-form-label').exists()).toBe(true);
        expect(container.find('.col-sm-2').exists()).toBe(true);
        expect(container.find('.col-sm-10').exists()).toBe(true);
        expect(container.find('.custom-file').exists()).toBe(true);

        expect(container.find('input').exists()).toBe(true);
        expect(container.find('input').classes()).toContain('custom-file-input');
        expect(container.find('input').classes()).not.toContain('form-control-file');
        expect(container.find('input').attributes().id).toBe('custom-file');
        expect(container.find('input').attributes().type).toBe('file');

        expect(container.find('label').exists()).toBe(true);
        expect(container.find('label').classes()).toContain('custom-file-label');
        expect(container.find('label').attributes().for).toBe('custom-file');
        expect(container.find('label').text()).toBe('Custom File');
    });
});
