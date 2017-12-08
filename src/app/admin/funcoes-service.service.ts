import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FuncoesServiceService {
  API_URL = 'http://localhost:3000';
  
    constructor(private http: HttpClient) {
    }
  
    getFuncoes(): Observable<any[]> {
      return this.http.get<any[]>(this.API_URL + '/funcoes');
    }
  
    getFuncao(id: number): Observable<any> {
      return this.http.get(this.API_URL + '/funcoes/' + id + '?_embed=nome');
    }
  
    addFuncao(codigo: string, nome: string, descricao: string): Observable<any> {
      const funcao = {codigo: codigo, nome: nome, descricao: descricao};
      return this.http.post(this.API_URL + '/funcoes', funcao);
    }
  
    updateFuncao(id: number, codigo: string, nome: string, descricao: string): Observable<any> {
      const funcao = {codigo: codigo, nome: nome, descricao: descricao};
      return this.http.patch(this.API_URL + '/funcoes/' + id, funcao);
    }
  
    deleteDisciplina(id: number) {
      return this.http.delete(this.API_URL + '/funcoes/' + id);
    }
}
