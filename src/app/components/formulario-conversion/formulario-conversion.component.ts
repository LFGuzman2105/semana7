import { Component, EventEmitter, Output } from '@angular/core';
import { Conversion } from '../../models/conversion';
import { FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-formulario-conversion',
  standalone: true,
  imports: [FormsModule, MatInputModule, MatSelectModule, MatButton],
  templateUrl: './formulario-conversion.component.html',
  styleUrl: './formulario-conversion.component.scss'
})
export class FormularioConversionComponent {
  numero: number;
  tipo: string;
  @Output() agregarConversion = new EventEmitter<Conversion>();

  constructor() {
    this.numero = 0;
    this.tipo = "";
  }

  agregar() {
    let conversion = 0;

    if (this.tipo == "celcius") {
      conversion = (this.numero * (9 / 5)) + 32;
      this.agregarConversion.emit(new Conversion(this.numero, conversion));
    }
    else if (this.tipo == "farenheit") {
      conversion = (this.numero - 32) * (5 / 9);
      this.agregarConversion.emit(new Conversion(conversion, this.numero));
    }
    else {
      alert("Debe seleccionar un tipo de grado.");
    }
  }
}