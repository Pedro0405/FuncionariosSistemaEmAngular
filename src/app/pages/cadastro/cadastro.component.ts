import { Component } from '@angular/core';
import { FuncionarioModel } from '../../models/funcionarioModel';
import { FuncionarioService } from '../../services/funcionario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  btnAcao ="Cadastrar";
  btnTitulo ="Cadastrar Funcionario";
  constructor(private funcionarioService: FuncionarioService, private router: Router){}

    createFuncionario(FuncionarioModel: FuncionarioModel){
      this.funcionarioService.createFuncionarios(FuncionarioModel).subscribe(data =>{
        this.router.navigate(['/']);
      });
    }
}
