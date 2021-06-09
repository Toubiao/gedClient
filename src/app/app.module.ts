import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule,HTTP_INTERCEPTORS} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import { DocDisplayerComponent } from './components/doc-displayer/doc-displayer.component';
import {AuthInterceptor} from "./components/interceptor/auth.interceptor";
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { NgxJsonViewerModule } from 'ngx-json-viewer';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    DocDisplayerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxExtendedPdfViewerModule,
    NgxJsonViewerModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass: AuthInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
