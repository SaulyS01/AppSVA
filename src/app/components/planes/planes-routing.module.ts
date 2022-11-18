import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarPlanesComponent } from './listar-planes/listar-planes.component';

const routes: Routes = [
  {
    path:'listar',
    component: ListarPlanesComponent
  },
  {
    path:'',
    redirectTo: 'listar',
    pathMatch: 'full'
  },
  {
    path:'**',
    redirectTo: 'listar'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanesRoutingModule { }
