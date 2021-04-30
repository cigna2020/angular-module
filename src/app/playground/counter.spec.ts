import {CounterTestComponent} from '../counter-test/counter-test.component';


describe('CounterComponent', () => {
    let component: CounterTestComponent;

    beforeEach(() => {
        component = new CounterTestComponent();
    });
    // beforeAll, afterEach, afterAll

    it('should increment counter by 1',  ()  => {
        component.increment();
        expect(component.counter).toBe(1);
    });
    it('should decrement counter by 1',  () => {
        component.decrement();
        expect(component.counter).toBe(-1);
    });
});
