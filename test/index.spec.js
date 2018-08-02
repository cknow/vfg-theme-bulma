import vfgTheme from '@/index.js';

describe('module', () => {
    test('module properties', () => {
        expect(vfgTheme).toBeTruthy();
        expect(vfgTheme).toHaveProperty('install');
    });
});
