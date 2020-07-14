import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        LoadingBarRouterModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
