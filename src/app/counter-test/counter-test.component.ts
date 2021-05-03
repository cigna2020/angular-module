import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-counter',
    templateUrl: './counter-test.component.html'
})

export class CounterTestComponent {
    counter = 0;
    // public form: FormGroup;
    //
    // constructor(private fb: FormBuilder) {
    //     this.form = fb.group({
    //         login: ['', Validators.required],
    //         email: [''],
    //     });
    // }
    constructor() {
    }

    @Output() counterEmitter = new EventEmitter<number>();

    increment() {
        this.counter++;
        this.counterEmitter.emit(this.counter);
    }

    decrement() {
        this.counter--;
    }
}
