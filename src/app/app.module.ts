import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { PanelCamaraComponent } from './components/utils/panel-camara/panel-camara.component';



//PRIMENG
import { ButtonModule } from 'primeng/button';
import { InicioComponent } from './components/inicio/inicio.component';



@NgModule({
  declarations: [
    AppComponent,
    PanelCamaraComponent,
    InicioComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,


    //PRIMENG
    ButtonModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
