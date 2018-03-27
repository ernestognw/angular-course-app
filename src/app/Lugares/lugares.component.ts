import { Component } from '@angular/core';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html'
})
export class LugaresComponent {
	title = 'PlatziSquare';
	lugares:any = [
	{id: 1, plan: 'pagado', cercania: 1, distancia: 1, active: 1, nombre: 'Florería la Gardenia'},
	{id: 2, plan: 'gratuito', cercania: 1, distancia: 1.8, active: 0, nombre: 'Donas la Pasadita'},
	{id: 3, plan: 'gratuito', cercania: 2, distancia: 5, active: 1, nombre: 'Veterinaria Huellitas'},
	{id: 4, plan: 'gratuito', cercania: 3, distancia: 10, active: 0, nombre: 'Sushi Sushiroll'},
	{id: 5, plan: 'pagado', cercania: 3, distancia: 35, active: 1, nombre: 'Hotel la Gracia'},
	{id: 6, plan: 'gratuito', cercania: 3, distancia: 120, active: 1, nombre: 'Zapatería el clavo'},
	];
	lat:number = 25.647643;
	lng:number = -100.2880583;

	constructor(){

	}

}
