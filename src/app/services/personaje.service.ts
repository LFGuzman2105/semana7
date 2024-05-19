import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Personaje } from '../models/personaje';

@Injectable({
  providedIn: 'root'
})
export class PersonajeService {
  private personaje;
  personajeSeleccionado;

  constructor() {
    this.personaje = new BehaviorSubject<Personaje>(new Personaje("", "assets/img/noPersonaje.jpg"));
    this.personajeSeleccionado = this.personaje.asObservable();
  }

  seleccionarPersonaje(personaje: Personaje) {
    this.personaje.next(personaje);
  }
}