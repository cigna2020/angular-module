import {CounterTestComponent} from '../counter-test/counter-test.component';
import {FormBuilder} from "@angular/forms";


describe('CounterComponent', () => {
    let component: CounterTestComponent;

    beforeEach(() => {
        component = new CounterTestComponent(new FormBuilder());
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
    it('should pass increment value by event emitter ',  () => {
        let result = null;
        component.counterEmitter.subscribe(v => result = v);
        component.increment();
        expect(component.counter).toBe(1);
    });
    it('should create form with 2 controls',  () => {
        expect(component.form.contains('login')).toBeTruthy(); // toBeTruthy === toBe(true)
        expect(component.form.contains('email')).toBeTruthy();
    });
    it('should mark login as invalid if empty value',  () => {
        const control = component.form.get('login');
        control.setValue('');
        expect(control.valid).toBeFalsy();
    });
});
