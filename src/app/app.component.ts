import { Component } from '@angular/core';
import { AutorizacionService } from './services/autorizacion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isCollapsed = false;
  loggedIn = false;
  currentUser = null;
  constructor(private autorizacionService: AutorizacionService) {
    this.autorizacionService.isLogged()
      .subscribe((result) => {
        if (result && result.uid) {
          this.loggedIn = true;
          this.autorizacionService.killed = false;
          this.currentUser = autorizacionService.getUserData();
        } else {
          this.loggedIn = false;
        }
      }, (error) => {
        this.loggedIn = false;
      });
  }
  logout() {
    this.autorizacionService.logout();
  }
  killHeaderFooter() {
    this.autorizacionService.killHeaderFooter();
  }
}
