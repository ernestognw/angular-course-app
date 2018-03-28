import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
 
@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html'
})

export class DetalleComponent {
	lugares:any = [
	{id: 1, plan: 'pagado', cercania: 1, distancia: 1, active: 1, nombre: 'Florería la Gardenia', description: 'Descripción de este negocio. Más adelante tendremos más información' },
	{id: 2, plan: 'gratuito', cercania: 1, distancia: 1.8, active: 1, nombre: 'Donas la Pasadita', description: 'Descripción de este negocio. Más adelante tendremos más información' },
	{id: 3, plan: 'gratuito', cercania: 2, distancia: 5, active: 1, nombre: 'Veterinaria Huellitas', description: 'Descripción de este negocio. Más adelante tendremos más información' },
	{id: 4, plan: 'gratuito', cercania: 3, distancia: 10, active: 1, nombre: 'Sushi Sushiroll', description: 'Descripción de este negocio. Más adelante tendremos más información' },
	{id: 5, plan: 'pagado', cercania: 3, distancia: 35, active: 1, nombre: 'Hotel la Gracia', description: 'Descripción de este negocio. Más adelante tendremos más información' },
	{id: 6, plan: 'gratuito', cercania: 3, distancia: 120, active: 1, nombre: 'Zapatería el clavo', description: 'Descripción de este negocio. Más adelante tendremos más información' },
	];
	id = null;
	lugar:any = {};
	constructor(private route: ActivatedRoute){
		console.log(this.route.snapshot.params['id']);
		console.log(this.route.snapshot.queryParams['action2']);
		console.log(this.route.snapshot.queryParams['referer']);
		this.id = this.route.snapshot.params['id'];
		this.lugar = (this.buscarLugar());
	}
	buscarLugar(){
		return this.lugares.filter((lugar) => { return lugar.id == this.id })[0] || null;
	}
}
