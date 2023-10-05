import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './listar/listar.component';
import { AsignarComponent } from './asignar/asignar.component';
import { EditarComponent } from './editar/editar.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {
    path: 'listar',
    component: ListarComponent
  },
  {
    path: 'asignar',
    component: AsignarComponent
  },
  {
    path: 'editar/:id',
    component: EditarComponent
  },
  {
    path: 'search/:keyword',
    component: SearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CitasRoutingModule { }
