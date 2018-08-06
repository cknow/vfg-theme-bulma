import { createComponent } from '../helpers';

describe('theme -> types', () => {
    let wrapper;

    beforeAll(() => {
        wrapper = createComponent({
            schema: [{
                label: 'Checkbox',
                inputType: 'checkbox'
            }, {
                label: 'Radio',
                inputType: 'radio'
            }, {
                label: 'Range',
                inputType: 'range'
            }, {
                label: 'File',
                inputType: 'file'
            }, {
                label: 'Button',
                inputType: 'button'
            }, {
                label: 'Image',
                inputType: 'image'
            }, {
                label: 'Submit',
                inputType: 'submit'
            }]
        });
    });

    test('check elements length', () => {
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.is('div')).toBe(true);
        expect(wrapper.findAll('div>.form-group')).toHaveLength(7);
        expect(wrapper.findAll('div>div>label')).toHaveLength(4);
        expect(wrapper.findAll('div>div>input')).toHaveLength(7);
    });

    test('check checkbox field', () => {
        const container = wrapper.findAll('div>.form-group').at(0);

        expect(container.exists()).toBe(true);
        expect(container.is('div')).toBe(true);
        expect(container.classes()).toContain('form-group');

        expect(container.find('.form-check').exists()).toBe(true);

        expect(container.find('label').exists()).toBe(true);
        expect(container.find('label').attributes().for).toBe('checkbox');
        expect(container.find('label').text()).toBe('Checkbox');
        expect(container.find('label').classes()).toContain('form-check-label');

        expect(container.find('input').exists()).toBe(true);
        expect(container.find('input').classes()).toContain('form-check-input');
        expect(container.find('input').classes()).not.toContain('form-control');
        expect(container.find('input').attributes().id).toBe('checkbox');
        expect(container.find('input').attributes().type).toBe('checkbox');
    });

    test('check radio field', () => {
        const container = wrapper.findAll('div>.form-group').at(1);

        expect(container.exists()).toBe(true);
        expect(container.is('div')).toBe(true);
        expect(container.classes()).toContain('form-group');

        expect(container.find('.form-check').exists()).toBe(true);

        expect(container.find('label').exists()).toBe(true);
        expect(container.find('label').attributes().for).toBe('radio');
        expect(container.find('label').text()).toBe('Radio');
        expect(container.find('label').classes()).toContain('form-check-label');

        expect(container.find('input').exists()).toBe(true);
        expect(container.find('input').classes()).toContain('form-check-input');
        expect(container.find('input').classes()).not.toContain('form-control');
        expect(container.find('input').attributes().id).toBe('radio');
        expect(container.find('input').attributes().type).toBe('radio');
    });

    test('check range field', () => {
        const container = wrapper.findAll('div>.form-group').at(2);

        expect(container.exists()).toBe(true);
        expect(container.is('div')).toBe(true);
        expect(container.classes()).toContain('form-group');

        expect(container.find('label').exists()).toBe(true);
        expect(container.find('label').attributes().for).toBe('range');
        expect(container.find('label').text()).toBe('Range');

        expect(container.find('input').exists()).toBe(true);
        expect(container.find('input').classes()).toContain('form-control-range');
        expect(container.find('input').classes()).not.toContain('form-control');
        expect(container.find('input').attributes().id).toBe('range');
        expect(container.find('input').attributes().type).toBe('range');
    });

    test('check file field', () => {
        const container = wrapper.findAll('div>.form-group').at(3);

        expect(container.exists()).toBe(true);
        expect(container.is('div')).toBe(true);
        expect(container.classes()).toContain('form-group');

        expect(container.find('label').exists()).toBe(true);
        expect(container.find('label').attributes().for).toBe('file');
        expect(container.find('label').text()).toBe('File');

        expect(container.find('input').exists()).toBe(true);
        expect(container.find('input').classes()).toContain('form-control-file');
        expect(container.find('input').classes()).not.toContain('form-control');
        expect(container.find('input').attributes().id).toBe('file');
        expect(container.find('input').attributes().type).toBe('file');
    });

    test('check button field', () => {
        const container = wrapper.findAll('div>.form-group').at(4);

        expect(container.exists()).toBe(true);
        expect(container.is('div')).toBe(true);
        expect(container.classes()).toContain('form-group');

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

        expect(container.find('label').exists()).toBe(false);

        expect(container.find('input').exists()).toBe(true);
        expect(container.find('input').classes()).toContain('btn');
        expect(container.find('input').classes()).not.toContain('form-control');
        expect(container.find('input').attributes().id).toBe('submit');
        expect(container.find('input').attributes().type).toBe('submit');
    });
});
