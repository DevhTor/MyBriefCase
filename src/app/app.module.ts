import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlueButtonComponent } from './blue-button/blue-button.component';
import { BlueButton2Component } from './blue-button2/blue-button2.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { WellcomeComponent } from './wellcome/wellcome.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { RouterModule, Routes } from '@angular/router';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { NavBarShellComponent } from './nav-bar-shell/nav-bar-shell.component';
import { ProjectCardComponent } from './project-card/project-card.component';


const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'Projects', component: ProjectsPageComponent },
  { path: 'Contact', component: ContactPageComponent },
  
  
];

@NgModule({
  declarations: [
    AppComponent,
    BlueButtonComponent,
    BlueButton2Component,
    NavBarComponent,
    WellcomeComponent,
    HomePageComponent,
    ProjectsPageComponent,
    ContactPageComponent,
    NavBarShellComponent,
    ProjectCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
