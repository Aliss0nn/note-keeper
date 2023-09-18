import { Component } from '@angular/core';
import { categoria } from '../../../models/categorias';
import { CategoriaService } from '../../../services/categoria.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-criar-categoria',
  templateUrl: './criar-categoria.component.html',
  styleUrls: ['./criar-categoria.component.css']
})
export class CriarCategoriaComponent {
categoria: categoria;

constructor(
  private categoriaService: CategoriaService,
  private router: Router,
  private toastService: ToastrService, 
)
{
this.categoria = new categoria('',0);
}

criarCategoria(){
    this.categoriaService.criar(this.categoria).subscribe((categoria) =>{
      this.toastService.success(`Categoria ${categoria.titulo} criada com sucesso.`,
      'Sucesso');

      this.router.navigate(['/categorias', 'listar']);
    })   
}
}
