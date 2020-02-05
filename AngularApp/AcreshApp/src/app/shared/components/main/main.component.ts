import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'acr-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
public chupakabra=null;
  constructor(private authService:AuthService) { }


getChupakabra(){
this.authService.getChupakabra().subscribe(c=>{
  this.chupakabra=c;
  console.log(this.authService.getUserInfo())
})//,this.chupakabra=null)
}

  ngOnInit() {
  }

}
