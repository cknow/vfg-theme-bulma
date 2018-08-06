import theme from '@/theme';

describe('theme', () => {
    test('properties', () => {
        expect(theme).toBeTruthy();
        expect(theme).toHaveProperty('custom');
        expect(theme).toHaveProperty('group');
        expect(theme).toHaveProperty('horizontal');
        expect(theme).toHaveProperty('row');
        expect(theme).toHaveProperty('schema');
        expect(theme).toHaveProperty('types');
    });
});
