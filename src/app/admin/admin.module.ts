import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminRoutingModule} from './admin-routing.module';
import {HomeComponent} from './home/home.component';
import {AdminComponent} from './admin/admin.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {SharedModule} from '../shared/shared.module';
import {CadastroDeDisciplinaComponent} from './cadastro-de-disciplina/cadastro-de-disciplina.component';
import {CadastroDeTurmaComponent} from './cadastro-de-turma/cadastro-de-turma.component';
import {DisciplinaComponent} from './disciplina/disciplina.component';
import {ListaDeDisciplinasComponent} from './lista-de-disciplinas/lista-de-disciplinas.component';
import {ListaDeTurmasComponent} from './lista-de-turmas/lista-de-turmas.component';
import {TurmaComponent} from './turma/turma.component';
import {DisciplinasService} from './disciplinas.service';
import {TurmasService} from './turmas.service';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { PessoaComponent } from './pessoa/pessoa.component';
import { CargoComponent } from './cargo/cargo.component';
import { FuncaoComponent } from './funcao/funcao.component';
import { CargosServiceService } from './cargos-service.service';
import { PessoasServiceService } from './pessoas-service.service';
import { FuncoesServiceService } from './funcoes-service.service';
import { ListaDeFuncionariosComponent } from './lista-de-funcionarios/lista-de-funcionarios.component';
import {CadastroDeFuncionarioComponent} from './cadastro-de-funcionario/cadastro-de-funcionario.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    AdminRoutingModule,
    SharedModule
  ],
  declarations: [
    HomeComponent,
    AdminComponent,
    CadastroDeDisciplinaComponent,
    CadastroDeTurmaComponent,
    DisciplinaComponent,
    ListaDeDisciplinasComponent,
    ListaDeTurmasComponent,
    TurmaComponent,
    PaginaNaoEncontradaComponent,
    PessoaComponent,
    CargoComponent,
    FuncaoComponent,
    ListaDeFuncionariosComponent,
    CadastroDeFuncionarioComponent
  ], 
  providers: [
    DisciplinasService,
    TurmasService,
    CargosServiceService,
    PessoasServiceService,
    FuncoesServiceService
  ]
})
export class AdminModule {
}
