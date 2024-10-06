import { Routes } from '@angular/router';
import { HomePageComponent } from './homeComponent/home-page/home-page.component';
import { ProdactsPageComponent } from './ProdactsComponent/prodacts-page/prodacts-page.component';
import { LogInPageComponent } from './logInComponent/log-in-page/log-in-page.component';
import { LogInGuardGuard } from '../guards/log-in-guard.guard';

export const routes: Routes = [
    {path: '' , redirectTo: 'log-in', pathMatch: 'full' } ,
    {path: 'home' , component : HomePageComponent , canActivate : [LogInGuardGuard] } ,
    {path: 'prodacts' , component: ProdactsPageComponent , canActivate: [LogInGuardGuard]} , 
    {path : 'log-in' , component: LogInPageComponent}
];

