import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FuncionarioService } from '../../services/funcionario.service';
import { FuncionarioModel } from '../../models/funcionarioModel';
@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrl: './detalhes.component.css'
})
export class DetalhesComponent implements OnInit{
  funcionario? :FuncionarioModel;
  id!:number;
  constructor(private funcionarioService: FuncionarioService, private route: ActivatedRoute, private router: Router){}
  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.funcionarioService.GetFuncionario(this.id).subscribe(data =>{
      const dados = data.dados;
      dados.dataCriacao =new Date(dados.dataCriacao!).toLocaleDateString('pt-BR');
this.funcionario = data.dados;  
    })

  }
InativarFuncionario(){
this.funcionarioService.InativaFuncionario(this.id).subscribe((data) =>{
  this.router.navigate(['']);
})  
}
}
