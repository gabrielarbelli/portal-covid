import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CovidComponent } from './covid/covid.component';

import {  ChartsModule } from 'ng2-charts';
import { Chart } from 'chart.js';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { ObitosComponent } from './covid/obitos/obitos.component';
import { RecuperadosComponent } from './covid/recuperados/recuperados.component';

@NgModule({
  declarations: [
    AppComponent,
    CovidComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    ObitosComponent,
    RecuperadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
