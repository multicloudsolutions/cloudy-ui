import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { DashboardComponent} from './dashboard/dashboard.component';
import { UsersAndTeamsComponent } from './users-and-teams/users-and-teams.component';
import { OverviewComponent } from './overview/overview.component';
import { ProviderComponent } from './provider/provider.component';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: '',
    component: DashboardComponent,
    children: [
      {path: 'users', component: UsersAndTeamsComponent},
      {path: 'dashboard', component: OverviewComponent},
      {path: 'provider', component: ProviderComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
