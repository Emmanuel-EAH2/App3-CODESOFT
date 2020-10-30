import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CamarasComponent } from './camaras/camaras.component';
import { CelularesComponent } from './celulares/celulares.component';

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
