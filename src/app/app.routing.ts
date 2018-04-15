import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';

import { HelpersComponent } from './helpers/helpers.component';
import { EventHelpersComponent } from './event-helpers/event-helpers.component';
import { LoginComponent } from './users/login/login.component';
import { RegisterComponent } from './users/register/register.component';
import { LoggedInGuard, AdminGuard, NotLoggedInGuard } from './auth/auth-guard';
import { MyEventsComponent } from './my-events/my-events.component';


const routes: Routes = [

  {
    path: 'events', component: EventsComponent, canActivate: [AdminGuard], data: { name: 'אירועים' }
  },
  {
    path: 'my-events', component: MyEventsComponent, canActivate: [LoggedInGuard], data: { name: 'אירועים שלי' }
  },

  {
    path: 'helpers',
    component: HelpersComponent,
    data: { name: 'מתנדבות' }, canActivate: [AdminGuard]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, data: { name: 'כניסה' } },
  { path: 'register', component: RegisterComponent, data: { name: 'הרשמה' }, canActivate: [NotLoggedInGuard] }
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
