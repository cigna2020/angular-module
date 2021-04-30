import {Component, ComponentFactoryResolver, ViewChild} from '@angular/core'
import {PopapComponent} from './popap/popap.component';
import {RefDirective} from './popap/ref.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {

  @ViewChild(RefDirective, {static: false}) refDir: RefDirective;

  constructor(private resolver: ComponentFactoryResolver) {}

  showModal() {
    const modalFactory = this.resolver.resolveComponentFactory(PopapComponent);
    const component = this.refDir.containerRef.createComponent(modalFactory);
    component.instance.title = 'Dynamic title';
    component.instance.close.subscribe(() => {
      this.refDir.containerRef.clear();
    });
  }
}

