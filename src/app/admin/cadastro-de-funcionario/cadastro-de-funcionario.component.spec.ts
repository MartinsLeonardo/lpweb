import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroDeFuncionarioComponent } from './cadastro-de-funcionario.component';

describe('CadastroDeFuncionarioComponent', () => {
  let component: CadastroDeFuncionarioComponent;
  let fixture: ComponentFixture<CadastroDeFuncionarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroDeFuncionarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroDeFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
