import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { UserDetailsComponent } from './pages/user-details/user-details.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { UserService } from './core/services/user.service';
import { RequestInterceptor } from './core/interceptor/http.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';

import { FormsModule } from '@angular/forms';
import { ComponentsModule } from "./components/components.module";

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        HeaderComponent,
        UserDetailsComponent
    ],
    providers: [
        UserService,
        { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true }
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatGridListModule,
        MatCardModule,
        FormsModule,
        MatPaginatorModule,
        ComponentsModule
    ]
})
export class AppModule { }
