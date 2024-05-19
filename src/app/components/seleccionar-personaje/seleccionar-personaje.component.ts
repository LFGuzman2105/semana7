import { Component } from '@angular/core';
import { PersonajeService } from '../../services/personaje.service';
import { Personaje } from '../../models/personaje';
import { FormsModule } from '@angular/forms';
import { MostrarPersonajeComponent } from '../mostrar-personaje/mostrar-personaje.component';
import { MatButton } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-seleccionar-personaje',
  standalone: true,
  imports: [FormsModule, MostrarPersonajeComponent, MatButton, MatInputModule, MatSelectModule],
  templateUrl: './seleccionar-personaje.component.html',
  styleUrl: './seleccionar-personaje.component.scss'
})
export class SeleccionarPersonajeComponent {
  personajes: Personaje[];
  seleccionado: Personaje;

  constructor(private personajeService: PersonajeService) {
    this.personajes = [
      new Personaje("Wolverine", "assets/img/wolverine.jpg"),
      new Personaje("Ciclope", "assets/img/ciclope.jpg"),
      new Personaje("Jean Gray", "assets/img/jean_gray.jpg"),
      new Personaje("Beast", "assets/img/beast.jpg"),
      new Personaje("Professor X", "assets/img/profesor_x.jpg")
    ];

    this.seleccionado = new Personaje("", "assets/img/noPersonaje.jpg");
  }

  seleccionar(personaje: Personaje) {
    this.seleccionado = personaje;
  }

  mostrar() {
    if (this.seleccionado.getNombre() == "") {
      alert("No se ha seleccionado ningún personaje");
    } 
    else {
      this.personajeService.seleccionarPersonaje(this.seleccionado); 
    }
  }
}