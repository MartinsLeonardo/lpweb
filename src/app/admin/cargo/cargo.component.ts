import { Component, OnInit } from '@angular/core';
import {CargosServiceService} from "../cargos-service.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-cargo',
  templateUrl: './cargo.component.html',
  styleUrls: ['./cargo.component.css']
})
export class CargoComponent implements OnInit {
  cargo;

  constructor(private CargosServiceService: CargosServiceService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.CargosServiceService.getCargo(id)
      .subscribe(cargo => this.cargo = cargo);
  }

}
