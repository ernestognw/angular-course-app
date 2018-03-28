import { Injectable } from "@angular/core";
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()

export class LugaresService{
	lugares:any = [
	{id: 1, plan: 'pagado', cercania: 1, distancia: 1, active: 1, nombre: 'Florería la Gardenia' descripcion: 'Agregaremos una descripción pronto'},
	{id: 2, plan: 'gratuito', cercania: 1, distancia: 1.8, active: 1, nombre: 'Donas la Pasadita' descripcion: 'Agregaremos una descripción pronto'},
	{id: 3, plan: 'gratuito', cercania: 2, distancia: 5, active: 1, nombre: 'Veterinaria Huellitas' descripcion: 'Agregaremos una descripción pronto'},
	{id: 4, plan: 'gratuito', cercania: 3, distancia: 10, active: 1, nombre: 'Sushi Sushiroll' descripcion: 'Agregaremos una descripción pronto'},
	{id: 5, plan: 'pagado', cercania: 3, distancia: 35, active: 1, nombre: 'Hotel la Gracia' descripcion: 'Agregaremos una descripción pronto'},
	{id: 6, plan: 'gratuito', cercania: 3, distancia: 120, active: 1, nombre: 'Zapatería el clavo' descripcion: 'Agregaremos una descripción pronto'},
	{id: 7, plan: 'gratuito', cercania: 3, distancia: 120, active: 1, nombre: 'Hamburguesas Chester' descripcion: 'Agregaremos una descripción pronto'},
	{id: 8, plan: 'gratuito', cercania: 3, distancia: 120, active: 1, nombre: 'Nails Room Durango' descripcion: 'Agregaremos una descripción pronto'},
	];
	constructor(private afDB:AngularFireDatabase){}
	public getLugares(){
		return this.afDB.list('lugares/');
	}
	public buscarLugar(id) {
		return this.afDB.object('lugares/' + id);
	}
	public guardarLugar(lugar){
		console.log(lugar);
		this.afDB.database.ref('lugares/'+lugar.id).set(lugar);
	}
}