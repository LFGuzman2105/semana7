import { Component } from '@angular/core';
import { MostrarPersonajeComponent } from '../mostrar-personaje/mostrar-personaje.component';
import { SeleccionarPersonajeComponent } from '../seleccionar-personaje/seleccionar-personaje.component';
import { Personaje } from '../../models/personaje';
import { PersonajeService } from '../../services/personaje.service';

@Component({
  selector: 'app-personajes',
  standalone: true,
  imports: [MostrarPersonajeComponent, SeleccionarPersonajeComponent],
  templateUrl: './personajes.component.html',
  styleUrl: './personajes.component.scss'
})
export class PersonajesComponent {
  personaje: Personaje;

  constructor(private personajeService: PersonajeService) {
    this.personaje = new Personaje("", "assets/img/noPersonaje.jpg");

    this.personajeService.personajeSeleccionado.subscribe((personaje: Personaje) => {
      this.personaje = personaje;
    });
  }
}