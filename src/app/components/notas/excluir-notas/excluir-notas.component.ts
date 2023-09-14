import { Component, OnInit } from '@angular/core';
import { Nota } from '../Nota';
import { NotaService } from '../nota.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { categoria } from '../../categorias/categorias';

@Component({
  selector: 'app-excluir-notas',
  templateUrl: './excluir-notas.component.html',
  styleUrls: ['./excluir-notas.component.css']
})
export class ExcluirNotasComponent implements OnInit{
  nota: Nota;

  constructor(
    private notaService: NotaService,
    private route: ActivatedRoute,
    private router: Router,
    private toastService: ToastrService,
  ){
     this.nota = new Nota('','','dark',0);
  }
   
  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!);

    this.notaService.selecionarPorId(id).subscribe((nota: Nota) => {
      this.nota = nota;
   }      
    );
  }

  excluirNota(){
    this.notaService.excluir(this.nota);

    this.toastService.success('Nota excluída com sucesso.', 'Sucesso');

    this.router.navigate(['/notas','listar']);
  }
}
