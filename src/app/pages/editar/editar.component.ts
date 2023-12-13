import { Component, OnInit } from '@angular/core';
import { FuncionarioModel } from '../../models/funcionarioModel';
import { FuncionarioService } from '../../services/funcionario.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})
export class EditarComponent implements OnInit{
btnAcao: string = "Editar";
btnTitulo: string = "Editar Funcionario";
funcionarioModel!: FuncionarioModel;
constructor(private funcionarioService: FuncionarioService, private route: ActivatedRoute, private router: Router){}
ngOnInit(): void {
  const id = Number(this.route.snapshot.paramMap.get(`id`));
  this.funcionarioService.GetFuncionario(id).subscribe(data =>{
    this.funcionarioModel = data.dados;
  })
}
editarFuncionario(funcionarioModel: FuncionarioModel){
this.funcionarioService.EditarFuncionarios(funcionarioModel).subscribe(data =>{
  this.router.navigate(['/']);
})
}
}
