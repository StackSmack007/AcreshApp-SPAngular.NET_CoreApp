import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'acr-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  public chupakabra = null;
  constructor(private authService: AuthService) { }

  get isLoggedIn() { return this.authService.isAuthenticated() }


}
