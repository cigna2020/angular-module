import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-popap',
  templateUrl: './popap.component.html',
  styleUrls: ['./popap.component.scss']
})
export class PopapComponent implements OnInit {
  @Input()
  title = 'Default title';

  @Output() close = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

}
