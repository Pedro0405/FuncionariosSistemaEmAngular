import { Component, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { FuncionarioModel } from '../../models/funcionarioModel';
@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrl: './funcionario-form.component.css'
})
export class FuncionarioFormComponent implements OnInit {
@Output() OnSubmit = new EventEmitter<FuncionarioModel>();
@Input() btnAcao!: string;
@Input() btnTitulo!: string;
@Input() dadosFuncionario: FuncionarioModel | null = null;
funcionarioForm!: FormGroup;
ngOnInit(): void {
  this.funcionarioForm = new FormGroup({
    id: new FormControl(this.dadosFuncionario ? this.dadosFuncionario.id : 0),
    nome: new FormControl(this.dadosFuncionario ? this.dadosFuncionario.nome : "", [Validators.required]),
    sobrenome: new FormControl(this.dadosFuncionario ? this.dadosFuncionario.sobrenome : "", [Validators.required]),
    departamento: new FormControl(this.dadosFuncionario ? this.dadosFuncionario.departamento : "", [Validators.required]),
    turno: new FormControl(this.dadosFuncionario ? this.dadosFuncionario.turno : "", [Validators.required]),
    ativo: new FormControl(this.dadosFuncionario ? this.dadosFuncionario.ativo : true),
    DataCriacao: new FormControl(new Date()),
    UltimaAtualiazacao: new FormControl(new Date())
  })
}
submit(){
this.OnSubmit.emit(this.funcionarioForm.value);
}
}
