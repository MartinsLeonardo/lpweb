import {Injectable} from '@angular/core';
import {Cargo} from './cargo.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class CargosServiceService {
  API_URL = 'http://localhost:3000';
  
    constructor(private http: HttpClient) {
    }
  
    getCargos(): Observable<any[]> {
      return this.http.get<any[]>(this.API_URL + '/cargos');
    }
  
    getCargo(id: number): Observable<any> {
      return this.http.get(this.API_URL + '/cargos/' + id + '?_embed=turmas'); 
    }
  
    addCargo(id: number, codigo: string, nome: string): Observable<any> {
      const cargo = {id: id, codigo: codigo, nome: nome};
      return this.http.post(this.API_URL + '/cargos', cargo);
    }
  
    updateCargo(id: number, codigo: string, nome: string): Observable<any> {
      const disciplina = {id: id, codigo: codigo, nome: nome};
      return this.http.patch(this.API_URL + '/disciplinas/' + id, disciplina);
    }
  
    deleteCargo(id: number) {
      return this.http.delete(this.API_URL + '/disciplinas/' + id);
    }
}
