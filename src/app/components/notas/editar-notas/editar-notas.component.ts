import { Component, OnInit } from '@angular/core';
import { Nota } from '../../../models/Nota';
import { NotaService } from '../../../services/nota.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { categoria } from '../../../models/categorias';

@Component({
  selector: 'app-editar-notas',
  templateUrl: './editar-notas.component.html',
  styleUrls: ['./editar-notas.component.css']
})
export class EditarNotasComponent implements OnInit {
  nota: Nota;

  constructor(
    private notaService: NotaService,
    private route: ActivatedRoute,
    private router: Router,
    private toastService: ToastrService,
  )
  {
   this.nota = new Nota('','','dark',0); 
  }

  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!);

    this.notaService.selecionarPorId(id).subscribe((nota: Nota) => {
      this.nota = nota;
    });
  }

  editarNota(){
    this.notaService.editar(this.nota);

    this.toastService.success('Nota Editada com sucesso.', 'Sucesso');

    this.router.navigate(['/notas','listar']);
  }
}
