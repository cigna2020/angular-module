import {greetFunc} from './greetFunc';

describe('greet', () => {
    it('should include name in return message', () => {
        // expect(greetFunc('Alex')).toBe('Hello Alex!');
        expect(greetFunc('Alex')).toContain('Alex');
    });
});
