import { Component, OnInit } from '@angular/core';
import { Nota } from '../../../models/Nota';
import { NotaService } from '../../../services/nota.service';
import { Categoria } from 'src/app/models/categorias';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-listar-notas',
  templateUrl: './listar-notas.component.html',
  styleUrls: ['./listar-notas.component.css']
})
export class ListarNotasComponent implements OnInit {
  notas: Nota[] = [];
  categorias: Categoria[] = [];
   
  constructor(private notaService: NotaService,
    private categoriaService: CategoriaService) {
  }

  ngOnInit(): void {
    this.selecionarTodas();

    this.categoriaService
      .selecionarTodos()
      .subscribe((categorias: Categoria[]) => {
        this.categorias = categorias;
      });
  }

  selecionarTodas(): void {
    this.notaService.selecionarTodos().subscribe((notas: Nota[]) => {
      this.notas = notas;
    });
  }

  selecionarNotasPorCategoria(categoria: Categoria) {
    this.notaService
      .selecionarNotasPorCategoria(categoria)
      .subscribe((notas: Nota[]) => {
        this.notas = notas;
      });
  }
}
