import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {HomeComponent} from "./home/home.component";
import {Tab} from "./shared/tabs.enum";
import {IsLoggedOutGuard} from "./shared/is-logged-out.guard";
import {IsLoggedInGuard} from "./shared/is-logged-in.guard";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: Tab.LOGIN,
    component: LoginComponent,
    canActivate: [IsLoggedOutGuard],
    canLoad: [IsLoggedOutGuard],
  },
  {
    path: Tab.REGISTER,
    component: RegisterComponent,
    canActivate: [IsLoggedOutGuard],
    canLoad: [IsLoggedOutGuard],
  },
  {
    path: Tab.HOME,
    component: HomeComponent,
    canActivate: [IsLoggedInGuard],
    canLoad: [IsLoggedInGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
