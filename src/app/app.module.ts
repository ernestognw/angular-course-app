import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { AppResaltarDirective } from './Directives/resaltar.directive';
import { AppContarClicksDirective } from './Directives/contar-clicks.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { DetalleComponent } from './detalle/detalle.component';
import { LugaresComponent } from './lugares/lugares.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LugaresService } from './services/lugares.service';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { CrearComponent } from './crear/crear.component';

const appRoutes: Routes = [
	{path:'', component: LugaresComponent},
	{path:'lugares', component: LugaresComponent},
	{path:'detalle/:id', component: DetalleComponent},
  {path:'contacto', component: ContactoComponent},
  {path:'crear', component: CrearComponent},

];

export const firebaseConfig = {
  apiKey: "AIzaSyACqjCteQZPxGM8DJ0c20iU_bClPvVD-lA",
  authDomain: "platzisquare-1521846284672.firebaseapp.com",
  databaseURL: "https://platzisquare-1521846284672.firebaseio.com",
  storageBucket: "platzisquare-1521846284672.appspot.com",
  messagingSenderId: "405701826257"
};

@NgModule({
  declarations: [
    AppComponent,
    	AppResaltarDirective,
    	AppContarClicksDirective,
    	DetalleComponent,
    	LugaresComponent,
    	ContactoComponent,
    	CrearComponent
  ],
  imports: [
    BrowserModule,
    	FormsModule,
   	AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCn0eygIajJOozSgy6ij5I7p4Zi4fkxrek'
    }),
    BrowserAnimationsModule,
    	RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [LugaresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
