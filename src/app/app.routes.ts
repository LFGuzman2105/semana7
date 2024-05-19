import { Routes } from '@angular/router';
import { ListadoConversionComponent } from './components/listado-conversion/listado-conversion.component';
import { PersonajesComponent } from './components/personajes/personajes.component';

export const routes: Routes = [
    { path: 'listado-conversion', component: ListadoConversionComponent },
    { path: 'personajes', component : PersonajesComponent},
    { path: '', redirectTo: '/listado-conversion', pathMatch: 'full' }
];