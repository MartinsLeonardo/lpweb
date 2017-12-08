import {Cargo} from "./cargo.model";

export class Funcao {
  constructor(public id: number,
              public codigo: string,
              public cargo: Cargo,
              public nome: string,
              public descricao: string) {
  }}