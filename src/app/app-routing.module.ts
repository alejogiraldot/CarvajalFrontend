import { NgModule } from '@angular/core';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component'
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {path:"",
component:HomeComponent,
pathMatch: "full"},
{
  path: "singup",
  component:SignupComponent,
  pathMatch:"full"
},
{
  path:"login",
  component:LoginComponent,
  pathMatch:"full"
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserAnimationsModule,MatButtonModule],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
