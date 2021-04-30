import {computeFuncSpec} from './computeFunc';

describe('compute', () => {
    it('should return 0 if negative input', () => {
        const result = computeFuncSpec(-1);
        expect(result).toBe(0);
    });
    it('should increment input if positive', () => {
        const result = computeFuncSpec(1);
        expect(result).toBe(2);
    });
});
