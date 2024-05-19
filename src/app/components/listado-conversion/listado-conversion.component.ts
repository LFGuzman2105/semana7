import { Component } from '@angular/core';
import { FormularioConversionComponent } from '../formulario-conversion/formulario-conversion.component';
import { MatIcon } from '@angular/material/icon';
import { Conversion } from '../../models/conversion';

@Component({
  selector: 'app-listado-conversion',
  standalone: true,
  imports: [FormularioConversionComponent, MatIcon],
  templateUrl: './listado-conversion.component.html',
  styleUrl: './listado-conversion.component.scss'
})
export class ListadoConversionComponent {
  temperaturas: Conversion[];

  constructor() {
    this.temperaturas = [];
  }

  agregarConversion(conversion: Conversion) {
    this.temperaturas.push(conversion);
  }

  eliminarConversion(temperatura: Conversion) {
    this.temperaturas.splice(this.temperaturas.indexOf(temperatura), 1);
  }
}