import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Shared/navbar/navbar.component';
import { FooterComponent } from './Shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './Shared/about/about.component';
import { CamarasComponent } from './components/camaras/camaras.component';
import { CelularesComponent } from './components/celulares/celulares.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    CamarasComponent,
    CelularesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
    {path: 'home', component: HomeComponent},
    {path: 'About', component: AboutComponent}
    ])
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
