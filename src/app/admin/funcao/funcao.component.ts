import { Component, OnInit } from '@angular/core';
import {FuncoesServiceService} from "../funcoes-service.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-funcao',
  templateUrl: './funcao.component.html',
  styleUrls: ['./funcao.component.css']
})
export class FuncaoComponent implements OnInit {
  funcao;

  constructor(private FuncoesServiceService: FuncoesServiceService,
              private route: ActivatedRoute,
              private router: Router) {
  }
  
  ngOnInit() {
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.FuncoesServiceService.getFuncao(id)
      .subscribe(funcao => this.funcao = funcao);
  }
}
