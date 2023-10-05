import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CitasRoutingModule } from './citas-routing.module';
import { ListarComponent } from './listar/listar.component';
import { AsignarComponent } from './asignar/asignar.component';
import { EditarComponent } from './editar/editar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    ListarComponent,
    AsignarComponent,
    EditarComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    CitasRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class CitasModule { }
