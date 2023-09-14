import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarNotasComponent } from './components/notas/listar-notas/listar-notas.component';
import { CriarNotaComponent } from './components/notas/criar-nota/criar-nota.component';
import { EditarNotasComponent } from './components/notas/editar-notas/editar-notas.component';
import { ExcluirNotasComponent } from './components/notas/excluir-notas/excluir-notas.component';
import { CriarCategoriaComponent } from './components/categorias/criar-categoria/criar-categoria.component';

const routes: Routes = [
{
path: '',
redirectTo: 'notas/listar',
pathMatch: 'full',
},
{
  path: 'notas/listar',
  component: ListarNotasComponent,
},
{
  path: 'notas/criar',
  component: CriarNotaComponent,
},
{
  path: 'notas/editar/:id',
  component: EditarNotasComponent,
},
{
  path:'notas/excluir/:id',
  component: ExcluirNotasComponent,
},
{
  path:'categorias/criar',
  component: CriarCategoriaComponent,
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
