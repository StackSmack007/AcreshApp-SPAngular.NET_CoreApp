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

  public userName:string=null;
  constructor(private router: Router, private authService: AuthService,private toastr:ToastrService) { }
  ngOnInit() {
  }

  ngDoCheck() {
    if(this.authService.isAuthenticated()){this.userName=this.authService.getUserInfo().userName;}
  }

  logout() {
    this.authService.clearUserData();
    this.toastr.show("Goodbye user!");
    this.userName=null;
    this.router.navigate([""]);
  }


}