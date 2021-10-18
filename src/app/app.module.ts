import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';


import { AboutComponent } from './about.component';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer.component';
import { HomeComponent } from './home.component';
import { NavComponent } from './nav.component';
import { NotFoundComponent } from './not-found.component';
import { PassengerDashboardModule } from './passenger-dashboard/passenger-dashboard.module';


const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch:"full" },
  { path: 'about', component: AboutComponent },
  { path: '**', component: NotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    AboutComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    PassengerDashboardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
