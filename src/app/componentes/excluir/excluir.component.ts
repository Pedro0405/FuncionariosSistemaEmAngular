import { Component, Inject } from '@angular/core';
import { FuncionarioModel } from '../../models/funcionarioModel';
import { FuncionarioService } from '../../services/funcionario.service';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-excluir',
  templateUrl: './excluir.component.html',
  styleUrl: './excluir.component.css'
})
export class ExcluirComponent {
  inputdata:any
  funcionario!: FuncionarioModel;

  constructor(@Inject(MAT_DIALOG_DATA) public data:any, private funcionarioService: FuncionarioService, private router: Router, private ref:MatDialogRef<ExcluirComponent>){}

  ngOnInit(): void {
      this.inputdata = this.data;

      this.funcionarioService.GetFuncionario(this.inputdata.id).subscribe(data => {
          this.funcionario = data.dados;
      });
  }

  excluir(){
    this.funcionarioService.ExcluirFuncionario(this.inputdata.id).subscribe(data => {
       this.ref.close();
       window.location.reload();
    });
  }
  voltar(){
    this.ref.close();
  }
}
