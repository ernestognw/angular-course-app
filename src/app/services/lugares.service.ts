import { Injectable } from "@angular/core";
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()

export class LugaresService{
	lugares:any = [
	{id: 1, plan: 'pagado', cercania: 1, distancia: 1, active: 1, nombre: 'Florería la Gardenia'},
	{id: 2, plan: 'gratuito', cercania: 1, distancia: 1.8, active: 1, nombre: 'Donas la Pasadita'},
	{id: 3, plan: 'gratuito', cercania: 2, distancia: 5, active: 1, nombre: 'Veterinaria Huellitas'},
	{id: 4, plan: 'gratuito', cercania: 3, distancia: 10, active: 1, nombre: 'Sushi Sushiroll'},
	{id: 5, plan: 'pagado', cercania: 3, distancia: 35, active: 1, nombre: 'Hotel la Gracia'},
	{id: 6, plan: 'gratuito', cercania: 3, distancia: 120, active: 1, nombre: 'Zapatería el clavo'},
	{id: 7, plan: 'gratuito', cercania: 3, distancia: 120, active: 1, nombre: 'Hamburguesas Chester'},
	{id: 8, plan: 'gratuito', cercania: 3, distancia: 120, active: 1, nombre: 'Nails Room Durango'},
	];
	constructor(private afDB:AngularFireDatabase){}
	public getLugares(){
		return this.lugares;
	}
	public buscarLugar(id){
		return this.lugares.filter((lugar) => { return lugar.id == id })[0] || null;
	}
	public guardarLugar(lugar){
		console.log(lugar);
		this.afDB.database.ref('lugares/1').set(lugar);
	}
}