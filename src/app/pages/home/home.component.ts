import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from '../../services/funcionario.service';
import { FuncionarioModel } from '../../models/funcionarioModel';
import { Console } from 'console';
import { MatDialog } from '@angular/material/dialog';
import { ExcluirComponent } from '../../componentes/excluir/excluir.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
[x: string]: any;
funcionarios: FuncionarioModel[] = [];
funcionariosGeral: FuncionarioModel[] = [];
columnsToDisplay = ['Situacao', 'Nome', 'Sobrenome', 'Departamento', 'Ações', 'Teste'];
constructor(private FuncionarioService: FuncionarioService, public dialog: MatDialog){}

ngOnInit(): void {
  this.FuncionarioService.GetFuncionarios().subscribe(data =>{
const dados = data.dados;
dados.map((item) => {
  item.dataCriacao = new Date(item.dataCriacao!).toLocaleDateString('pt-BR');
  item.ultimaAtualização = new Date(item.ultimaAtualização!).toLocaleDateString('pt-BR');
})
this.funcionarios = data.dados;
console.log(data);
this.funcionariosGeral = data.dados;
  })
}
seach(event : Event){
const target = event.target as HTMLInputElement;
const value = target.value.toLocaleLowerCase();
this.funcionarios = this.funcionariosGeral.filter(funcionario =>{
  return funcionario.nome.toLowerCase().includes(value);
})
}
openDialog(id : number){
  this.dialog.open(ExcluirComponent, {
    width: '450px',
    height: "450px",
    data: {
      id: id
    }
});
}
}
