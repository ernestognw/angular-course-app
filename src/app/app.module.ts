import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'
import { AgmCoreModule } from '@agm/core';
import { AppResaltarDirective } from './Directives/resaltar.directive';
import { AppContarClicksDirective } from './Directives/contar-clicks.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { DetalleComponent } from './detalle/detalle.component';
import { LugaresComponent } from './lugares/lugares.component';
import { ContactoComponent } from './contacto/contacto.component';


const appRoutes: Routes = [
	{path:'', component: LugaresComponent},
	{path:'lugares', component: LugaresComponent},
	{path:'detalle/:id', component: DetalleComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    	AppResaltarDirective,
    	AppContarClicksDirective,
    	DetalleComponent,
    	LugaresComponent,
    	ContactoComponent
  ],
  imports: [
    BrowserModule,
    	FormsModule,
   	AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCn0eygIajJOozSgy6ij5I7p4Zi4fkxrek'
    }),
    BrowserAnimationsModule,
    	RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
