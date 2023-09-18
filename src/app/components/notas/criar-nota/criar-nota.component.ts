import { Component } from '@angular/core';
import { Nota } from '../../../models/Nota';
import { NotaService } from '../../../services/nota.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { categoria } from '../../../models/categorias';

@Component({
  selector: 'app-criar-nota',
  templateUrl: './criar-nota.component.html',
  styleUrls: ['./criar-nota.component.css']
})
export class CriarNotaComponent {
nota: Nota;
categorias: categoria[] = [];

constructor(
   private notaService: NotaService,
   private router: Router,
   private toastService: ToastrService,
   )
   {
   this.nota = new Nota('','','dark',0); 
}

criarNota() {
   this.notaService.criar(this.nota).subscribe((nota) => {
    this.toastService.success(
      `Nota ${nota.titulo} criada com sucesso.`,
      'Sucesso'
    );

    this.router.navigate(['/notas', 'listar']);
  });
}

definirCategoria(categoria: categoria){
  this.nota.categoria = categoria;
  this.nota.categoriaId = categoria.id;
}
}
