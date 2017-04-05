import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { NewsComponent } from './news/news.component';
import { AddNewsComponent } from './add-news/add-news.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from "./common/auth.guard";

const appRoutes: Routes = [
  {
    path: '',
    component:HomepageComponent
  },
  {
    path: 'news',
    component:NewsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'add-news',
    component:AddNewsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component:LoginComponent
  },
  { path: '**', redirectTo: '' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

