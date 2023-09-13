import { Injectable } from '@angular/core';
import { Nota } from './Nota';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root', // App module
})
export class NotaService {
  private API_URL ='http://localhost:3000/notas';

  constructor(private http: HttpClient){

  }

  criar(nota: Nota) {
    return this.http.post<Nota>(this.API_URL, nota);
  }

  editar(nota: Nota){

  }

  selecionarTodos(): Nota[] {
    return [];
  }
}