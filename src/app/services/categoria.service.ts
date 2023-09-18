import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { categoria } from "../models/categorias";
import { Observable } from "rxjs";

@Injectable({
  providedIn:'root',
})

export class CategoriaService{

  private API_URL = 'http://localhost:3000/categorias';

  constructor(private http: HttpClient){

  }
  
  criar(categoria: categoria) : Observable<categoria> {
    return this.http.post<categoria>(this.API_URL, categoria);
  }

  editar(categoria: categoria) : Observable<categoria> {
   const url = `${this.API_URL}/${categoria.id}`

    return this.http.put<categoria>(url,categoria);
  }

  excluir(categoria: categoria) : Observable<categoria> {
    const url = `${this.API_URL}/${categoria.id}`

    return this.http.delete<categoria>(url);
  }

  selecionarPorId(id: number) : Observable<categoria>
  {
    const url = `${this.API_URL}/${id}`;
    return this.http.get<categoria>(url);  
  }

  selecionarTodos() : Observable<categoria[]> {
   return this.http.get<categoria[]>(this.API_URL);   
 } 
}