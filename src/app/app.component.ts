import {Component, ComponentFactoryResolver, ViewChild} from '@angular/core'
import {PopapComponent} from './popap/popap.component';
import {RefDirective} from './popap/ref.directive';
import {Meta, Title} from "@angular/platform-browser";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})


export class AppComponent {

    @ViewChild(RefDirective, {static: false}) refDir: RefDirective;

    constructor(
        private resolver: ComponentFactoryResolver,
        private title: Title,
        private meta: Meta
    ) {
        this.title.setTitle('New title');
        this.meta.addTags([
            {name: 'keywords', content: 'angular, IT, JS'},
            {name: 'description', content: 'this is app about angular'}
        ]);
    }

    showModal() {
        const modalFactory = this.resolver.resolveComponentFactory(PopapComponent);
        const component = this.refDir.containerRef.createComponent(modalFactory);
        component.instance.title = 'Dynamic title';
        component.instance.close.subscribe(() => {
            this.refDir.containerRef.clear();
        });
    }
}

