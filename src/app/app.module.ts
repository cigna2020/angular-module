import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms'
import {HomePageComponent} from './home-page/home-page.component'
import {AppRoutingModule} from './app-routing.module'
import {SharedModule} from "./shared/shared.module";
import { PopapComponent } from './popap/popap.component';
import {RefDirective} from "./popap/ref.directive";

@NgModule({
    declarations: [
        AppComponent,
        HomePageComponent,
        PopapComponent,
        RefDirective
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        SharedModule
    ],
    providers: [],
    entryComponents: [PopapComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
