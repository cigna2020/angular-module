import {Component} from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `Counter: {{ counter }}`
})

export  class CounterTestComponent {
    counter = 0;

    increment() {
        this.counter++;
    }

    decrement() {
        this.counter--;
    }
}
