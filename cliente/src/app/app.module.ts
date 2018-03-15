import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';
import { UIRouterModule } from "@uirouter/angular";
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FeedComponent } from './feed/feed.component';
import { HttpClient } from '@angular/common/http/src/client';

import { UrlInterceptor } from './url.interceptor';
import { NoticiaModule } from './noticia/noticia';

const appRoutes: Routes = [
  { path: 'feed', component: FeedComponent },
  { path: '',   redirectTo: '/feed', pathMatch: 'full' },
  { path: '**', redirectTo: '/feed' }
];


@NgModule({
  declarations: [
    AppComponent,
    FeedComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    ),
    HttpClientModule,
    NoticiaModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: UrlInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
