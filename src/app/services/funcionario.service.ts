import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { ServiceResponse } from '../models/serviceResponse';
import { Observable } from 'rxjs';
import { FuncionarioModel } from '../models/funcionarioModel';
@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {
  private Apiurl = environment.ApiUrl + "FuncionarioModels";
  constructor(private http: HttpClient) { }
  
  GetFuncionarios(): Observable<ServiceResponse<FuncionarioModel[]>> {
    return this.http.get<ServiceResponse<FuncionarioModel[]>>(this.Apiurl);
  }
  GetFuncionario(id: number): Observable<ServiceResponse<FuncionarioModel>> {
    return this.http.get<ServiceResponse<FuncionarioModel>>(`${this.Apiurl}/${id}`);
  }
  createFuncionarios(funcionarioModel: FuncionarioModel): Observable<ServiceResponse<FuncionarioModel[]>> {
    return this.http.post<ServiceResponse<FuncionarioModel[]>>(`${this.Apiurl}`, funcionarioModel);
  }
  EditarFuncionarios(funcionarioModel: FuncionarioModel): Observable<ServiceResponse<FuncionarioModel[]>> {
    return this.http.put<ServiceResponse<FuncionarioModel[]>>(`${this.Apiurl}`, funcionarioModel);
  }
  InativaFuncionario(id: number): Observable<ServiceResponse<FuncionarioModel[]>> {
    console.log(id);
    return this.http.put<ServiceResponse<FuncionarioModel[]>>(`${this.Apiurl}/inativaFuncionario/${id}`,{});

}
ExcluirFuncionario(id: number) : Observable<ServiceResponse<FuncionarioModel[]>>{
  return this.http.delete<ServiceResponse<FuncionarioModel[]>>(`${this.Apiurl}/${id}`)
}

}

