import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {ProfileComponent} from './profile/profile.component';
import {HomeComponent} from './home/home.component';
const routes: Routes = [
   {path: 'login', component: LoginComponent},
   {path: 'signup', component: RegisterComponent},
   {path :'profile',component:ProfileComponent},
   {path :'home',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
