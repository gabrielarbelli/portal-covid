import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.scss']
})
export class CovidComponent implements OnInit {

  casosConfirmados = 0;
  casosRecuperados = 0;
  casosAtivos = 0;
  casosObitos = 0;

  constructor() { }

  ngOnInit(): void{
    this.buscarDadosCovid();
  }

  async buscarDadosCovid() {
    const res = await fetch('http://localhost:3000/data_covid_brasil');
    const json = await res.json();

    this.casosConfirmados = json[0].confirmed;
    this.casosRecuperados = json[0].recovered;
    this.casosAtivos = json[0].cases;
    this.casosObitos = json[0].deaths;
  }

}
