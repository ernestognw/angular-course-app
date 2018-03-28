import { Component } from '@angular/core';
import { LugaresService } from '../services/lugares.service';


@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html'
})
export class LugaresComponent {
	title = 'PlatziSquare';
	lat:number = 25.647643;
	lng:number = -100.2880583;
	lugares = null;

	constructor(private lugaresService: LugaresService){
		this.lugares = lugaresService.getLugares();
	}

}
