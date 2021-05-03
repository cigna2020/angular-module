import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms'
import {HomePageComponent} from './home-page/home-page.component'
import {AppRoutingModule} from './app-routing.module'
import {SharedModule} from "./shared/shared.module";
import { PopapComponent } from './popap/popap.component';
import {RefDirective} from "./popap/ref.directive";
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import {CounterTestComponent} from "./counter-test/counter-test.component";
import {PostsComponent} from "./posts/posts.component";

@NgModule({
    declarations: [
        AppComponent,
        HomePageComponent,
        PopapComponent,
        RefDirective,
        CounterTestComponent,
        PostsComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        SharedModule,
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
    ],
    providers: [],
    entryComponents: [PopapComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
