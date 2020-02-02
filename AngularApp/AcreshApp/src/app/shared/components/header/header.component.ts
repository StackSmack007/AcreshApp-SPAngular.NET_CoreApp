import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'acr-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public isLoggedIn: boolean = false
  constructor(private router: Router, private authService: AuthService,private toastr:ToastrService) { }
  ngOnInit() {

  }

  ngDoCheck() {
    this.isLoggedIn = this.authService.isAuthenticated();
  }

  logout() {
    this.authService.logout();
    this.toastr.show("Goodbye user!");
    this.router.navigate([""]);
  }


}