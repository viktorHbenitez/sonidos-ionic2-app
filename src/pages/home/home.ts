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


  reproducir(animal : Animal){
    console.log(animal);

    //Creamos un obj audio y asignamos a su propiedas de src el sonido del animal
    let audio = new Audio();
    audio.src = animal.audio;

    //Generar el sonido
    audio.load();
    audio.play();

    animal.reproduciendo = true;

    setTimeout( () => animal.reproduciendo = false, animal.duracion * 1000 );
    // setTimeout( () => cambiaValor, TiempoDuracion * 1000);

  }


}
