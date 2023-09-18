import { Component, OnInit } from '@angular/core';
import { categoria } from '../../../models/categorias';
import { CategoriaService } from '../../../services/categoria.service';

@Component({
  selector: 'app-listar-categorias',
  templateUrl: './listar-categorias.component.html',
  styleUrls: ['./listar-categorias.component.css']
})
export class ListarCategoriasComponent implements OnInit {
categorias: categoria[] = [];

constructor(private categoriaService: CategoriaService){
}
ngOnInit(): void {
    this.categoriaService.selecionarTodos().subscribe((categorias: categoria[]) =>{
      this.categorias = categorias
    });
  };
  }
