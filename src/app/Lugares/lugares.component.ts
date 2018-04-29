import { Component } from '@angular/core';
import { LugaresService } from '../services/lugares.service';
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  animations: [
    trigger('contenedorAnimable', [
    state('inicial', style({
      opacity: 0,
    })),
    state('final', style({
      opacity: 1,
    })),
    transition('inicial => final', animate(1000)),
    transition('final => inicial', animate(500)),
    ])
  ]
})
export class LugaresComponent {
  title = 'PlatziSquare';
  state = 'inicial';

  lat = 25.647643;
  lng = -100.2880583;
  lugares = null;
  animar() {
    this.state = (this.state === 'final') ? 'inicial' : 'final';
  }
  animacionInicia(e) {
    console.log('Iniciado');
    console.log(e);
  }
  animacionTermina(e) {
    console.log('Terminado');
    console.log(e);
  }

  constructor(private lugaresService: LugaresService) {
  lugaresService.getLugares()
        .valueChanges().subscribe( lugares => {
        this.lugares = lugares;
        this.state = 'final';
      });
  }

}
