import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Categoria } from 'src/app/models/categorias';

@Component({
  selector: 'app-filtrar-notas',
  templateUrl: './filtrar-notas.component.html',
  styleUrls: ['./filtrar-notas.component.css']
})
export class FiltrarNotasComponent {
  
  @Input({ required: true }) categorias: Categoria[] = [];

  @Output() onFiltroSelecionado: EventEmitter<Categoria | null>;

  constructor() {
    this.onFiltroSelecionado = new EventEmitter();
  }

  selecionarTodas() {
    this.onFiltroSelecionado.emit(null);
  }

  selecionarNotasPorCategoria(categoria: Categoria) {
    this.onFiltroSelecionado.emit(categoria);
  }
}
