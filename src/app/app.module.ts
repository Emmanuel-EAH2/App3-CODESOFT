import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Shared/navbar/navbar.component';
import { FooterComponent } from './Shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './Shared/about/about.component';
import { CamarasComponent } from './productos/camaras/camaras.component';
import { CelularesComponent } from './productos/celulares/celulares.component';
import { ChangesPipe } from './pipes/cambiar/changes.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    CamarasComponent,
    CelularesComponent,
    ChangesPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
    {path: 'home', component: HomeComponent},
    {path: 'Celulares', component: CelularesComponent},
    {path: 'Camaras', component: CamarasComponent},
    {path: 'About', component: AboutComponent}
    ])
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
