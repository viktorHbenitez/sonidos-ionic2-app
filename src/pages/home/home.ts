import { Component } from '@angular/core';

import { ANIMALES } from "../../data/data.animales";  //importamos el model

// Usamos la estructura de datos de tipo animal
import { Animal } from '../../interfaces/animal.interface';  //creamos interface para manipular los datos de la Data

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  animales : Animal[] = [];

  constructor() {

    // slice : crea un clone del objeto
    this.animales = ANIMALES.slice(0);  // la interfaces de animales debe los mismos atributos de la data ANIMAL

  }

}
