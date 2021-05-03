import {CounterTestComponent} from './counter-test.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';

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
    it('should be created the component',  () => {
        expect(component).toBeDefined();
    });
});
