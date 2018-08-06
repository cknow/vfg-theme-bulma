import { createComponent } from '../helpers';

describe('theme -> custom', () => {
    let wrapper;

    beforeAll(() => {
        wrapper = createComponent({
            schema: [{
                custom: true,
                inputType: 'checkbox',
                label: 'Checkbox'
            }, {
                custom: true,
                inputType: 'radio',
                label: 'Radio'
            }, {
                custom: true,
                inputType: 'range',
                label: 'Range'
            }, {
                custom: true,
                inputType: 'file',
                label: 'File'
            }]
        });
    });

    test('check elements length', () => {
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.is('div')).toBe(true);
        expect(wrapper.findAll('div>.form-group')).toHaveLength(4);
        expect(wrapper.findAll('div>div>label')).toHaveLength(4);
        expect(wrapper.findAll('div>div>input')).toHaveLength(4);
    });

    test('check checkbox field', () => {
        const container = wrapper.findAll('.form-group').at(0);

        expect(container.exists()).toBe(true);
        expect(container.is('div')).toBe(true);
        expect(container.classes()).toContain('form-group');

        expect(container.find('.custom-control').exists()).toBe(true);
        expect(container.find('.custom-checkbox').exists()).toBe(true);
        expect(container.find('.form-check').exists()).toBe(false);

        expect(container.find('label').exists()).toBe(true);
        expect(container.find('label').classes()).toContain('custom-control-label');
        expect(container.find('label').classes()).not.toContain('form-check-label');
        expect(container.find('label').attributes().for).toBe('checkbox');
        expect(container.find('label').text()).toBe('Checkbox');

        expect(container.find('input').exists()).toBe(true);
        expect(container.find('input').classes()).toContain('custom-control-input');
        expect(container.find('input').classes()).not.toContain('form-check-input');
        expect(container.find('input').attributes().id).toBe('checkbox');
        expect(container.find('input').attributes().type).toBe('checkbox');
    });

    test('check radio field', () => {
        const container = wrapper.findAll('.form-group').at(1);

        expect(container.exists()).toBe(true);
        expect(container.is('div')).toBe(true);
        expect(container.classes()).toContain('form-group');

        expect(container.find('.custom-control').exists()).toBe(true);
        expect(container.find('.custom-radio').exists()).toBe(true);
        expect(container.find('.form-check').exists()).toBe(false);

        expect(container.find('label').exists()).toBe(true);
        expect(container.find('label').classes()).toContain('custom-control-label');
        expect(container.find('label').classes()).not.toContain('form-check-label');
        expect(container.find('label').attributes().for).toBe('radio');
        expect(container.find('label').text()).toBe('Radio');

        expect(container.find('input').exists()).toBe(true);
        expect(container.find('input').classes()).toContain('custom-control-input');
        expect(container.find('input').classes()).not.toContain('form-check-input');
        expect(container.find('input').attributes().id).toBe('radio');
        expect(container.find('input').attributes().type).toBe('radio');
    });

    test('check range field', () => {
        const container = wrapper.findAll('.form-group').at(2);

        expect(container.exists()).toBe(true);
        expect(container.is('div')).toBe(true);
        expect(container.classes()).toContain('form-group');

        expect(container.find('label').exists()).toBe(true);
        expect(container.find('label').attributes().for).toBe('range');
        expect(container.find('label').text()).toBe('Range');

        expect(container.find('input').exists()).toBe(true);
        expect(container.find('input').classes()).toContain('custom-range');
        expect(container.find('input').attributes().id).toBe('range');
        expect(container.find('input').attributes().type).toBe('range');
    });

    test('check file field', () => {
        const container = wrapper.findAll('.form-group').at(3);

        expect(container.exists()).toBe(true);
        expect(container.is('div')).toBe(true);
        expect(container.classes()).toContain('form-group');

        expect(container.find('.custom-file').exists()).toBe(true);

        expect(container.find('input').exists()).toBe(true);
        expect(container.find('input').classes()).toContain('custom-file-input');
        expect(container.find('input').classes()).not.toContain('form-control-file');
        expect(container.find('input').attributes().id).toBe('file');
        expect(container.find('input').attributes().type).toBe('file');

        expect(container.find('label').exists()).toBe(true);
        expect(container.find('label').classes()).toContain('custom-file-label');
        expect(container.find('label').attributes().for).toBe('file');
        expect(container.find('label').text()).toBe('File');
    });
});
