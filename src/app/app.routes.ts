import { Routes } from '@angular/router';
import { HomePageComponent } from './homeComponent/home-page/home-page.component';
import { ProdactsPageComponent } from './ProdactsComponent/prodacts-page/prodacts-page.component';
import { LogInPageComponent } from './logInComponent/log-in-page/log-in-page.component';
import { LogInGuardGuard } from '../guards/log-in-guard.guard';
import { SignInComponent } from './sign-in/sign-in.component';
import { ProdactPageComponent } from './prodact-page/prodact-page.component';

export const routes: Routes = [
    {path: '' , redirectTo: 'home', pathMatch: 'full' } ,
    {path: 'home' , component : HomePageComponent , canActivate : [LogInGuardGuard]  } ,
    {path: 'prodacts' , component: ProdactsPageComponent , canActivate : [LogInGuardGuard] } , 
    {path : 'log-in' , component: LogInPageComponent} ,
    {path: 'sign-in' , component: SignInComponent} ,
    {path: 'prodact/:id' , component : ProdactPageComponent , canActivate : [LogInGuardGuard]}
];

