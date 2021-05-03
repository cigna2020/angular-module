import {CounterTestComponent} from './counter-test.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from "@angular/platform-browser";

describe('CounterComponent', () => {
    let component: CounterTestComponent;
    let fixture: ComponentFixture<CounterTestComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [CounterTestComponent]
        });
        fixture = TestBed.createComponent(CounterTestComponent);
        component = fixture.componentInstance;
    });
    it('should be created the component', () => {
        expect(component).toBeDefined();
    });
    it('should render counter property', () => {
        const num = 42;
        component.counter = num;
        fixture.detectChanges(); // сообщаем Angular о том, что произошли изменения
        const debElement = fixture.debugElement.query(By.css('.counter'));
        const elem: HTMLElement = debElement.nativeElement;
        expect(elem.textContent).toContain(num.toString());
    });
});
