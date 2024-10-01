import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public resultado: String = "Resultado"
  public precoAlcool: number;
  public precoGasolina: number;

  constructor() {
    this.precoAlcool = 0
    this.precoGasolina = 0
  }

  public calcular() {

    if (this.precoAlcool && this.precoGasolina) {
      var pAlcool = this.precoAlcool
      var pGasolina = this.precoGasolina
      if (pAlcool / pGasolina >= 0.7) {
        this.resultado = "Melhor usar gasolina"
      } else {
        this.resultado = "Melhor usar álcool"
      }
    } else {
      this.resultado = 'Não preenchidos'
    }

  }

}
