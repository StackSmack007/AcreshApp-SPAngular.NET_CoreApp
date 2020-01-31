import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'acr-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
public isLoggedIn:boolean=false
  constructor(private authService:AuthService) { }
  ngOnInit() {

  }

  ngDoCheck(){
    this.isLoggedIn=this.authService.isAuthenticated();
  }
}