import { Component, OnInit } from '@angular/core';
import { categoria } from '../../../models/categorias';
import { CategoriaService } from '../../../services/categoria.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-excluir-categorias',
  templateUrl: './excluir-categorias.component.html',
  styleUrls: ['./excluir-categorias.component.css']
})
export class ExcluirCategoriasComponent implements OnInit{
categoria: categoria

constructor(
  private categoriaService: CategoriaService,
    private route: ActivatedRoute,
    private router: Router,
    private toastService: ToastrService,
)
{
this.categoria = new categoria('',0)
}
  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!);

    this.categoriaService.selecionarPorId(id).subscribe((categoria: categoria ) =>{
      this.categoria = categoria
    });
  }

excluirCategoria(){
this.categoriaService.excluir(this.categoria);

this.toastService.success('Categoria Excluida com sucesso','Sucesso');

this.router.navigate(['/categorias','/listar']);
}
}