import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';
import { AuthProvider }   from './common/auth.provider';


import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AddNewsComponent } from './add-news/add-news.component';
import { NewsComponent } from './news/news.component';
import { LoginComponent } from './login/login.component';
import { routing } from './app.routing';
import { AuthGuard } from "./common/auth.guard";
import {Ng2PaginationModule} from 'ng2-pagination';

@NgModule({
  declarations: [
    AppComponent,
	  HomepageComponent,
	  AddNewsComponent,
	  NewsComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    Ng2PaginationModule,
    FormsModule,
    HttpModule,
	routing
  ],
  providers: [
    AuthGuard,
    {provide: AuthHttp, useClass : AuthProvider}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
