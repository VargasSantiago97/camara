import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PanelCamaraComponent } from './components/utils/panel-camara/panel-camara.component';
import { InicioComponent } from './components/inicio/inicio.component';


// Define las rutas
const routes: Routes = [
    { path: '', component: InicioComponent },
    { path: 'panel', component: PanelCamaraComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
