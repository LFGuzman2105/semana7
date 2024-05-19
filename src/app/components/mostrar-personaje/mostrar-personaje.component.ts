import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../../models/personaje';
import { PersonajeService } from '../../services/personaje.service';

@Component({
  selector: 'app-mostrar-personaje',
  standalone: true,
  imports: [],
  templateUrl: './mostrar-personaje.component.html',
  styleUrl: './mostrar-personaje.component.scss'
})
export class MostrarPersonajeComponent implements OnInit {
  @Input() personaje: Personaje;

  constructor(private personajeService: PersonajeService) {
    this.personaje = new Personaje("", "assets/img/noPersonaje.jpg");
  }

  ngOnInit(): void {
    this.personajeService.personajeSeleccionado.subscribe((personaje: Personaje) => {
      this.personaje = personaje;
    });
  }
}