import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './components/calendar/calendar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { ConfSpaceComponent } from './components/workspace/conf-space/conf-space.component';
import { SpaceComponent } from './components/workspace/space/space.component';
import { WorkspaceComponent } from './components/workspace/workspace.component';
import { LoginGuard } from './guards/login.guard';




const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'workspace', component: WorkspaceComponent },
  { path: 'profile/:idprofile', component: ProfileComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'space', component: SpaceComponent },
  { path: 'conference', component: ConfSpaceComponent },
  { path: "**", component: NotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
