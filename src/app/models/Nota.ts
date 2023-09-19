import { Categoria } from "./categorias";

export class Nota{
id?: number;
titulo: string;
conteudo: string;
tema: string;
categoriaId?: number;
categoria?: Categoria;


constructor(titulo: string, conteudo: string, tema: Tema, id?: number, categoriaId?: number, categoria?: Categoria) {
  this.id = id;
  this.titulo = titulo;
  this.conteudo = conteudo;
  this.tema = tema;
  this.categoria = categoria;
  this.categoriaId = categoriaId;
}
}

type Tema = 'info' | 'warning' | 'danger' | 'dark';