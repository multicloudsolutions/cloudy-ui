import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavComponent } from './nav/nav.component';
import { ContentComponent } from './content/content.component';
import { OverviewComponent } from './overview/overview.component';
import { UsersAndTeamsComponent } from './users-and-teams/users-and-teams.component';
import { ProviderComponent } from './provider/provider.component';
import { TemplatesComponent } from './templates/templates.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    AboutComponent,
    DashboardComponent,
    NavComponent,
    ContentComponent,
    OverviewComponent,
    UsersAndTeamsComponent,
    ProviderComponent,
    TemplatesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
