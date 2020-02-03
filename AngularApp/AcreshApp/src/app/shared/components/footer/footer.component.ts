import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'acr-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public year: number = new Date().getFullYear();
  ngOnInit() {
    setInterval(() => {
      this.year = new Date().getFullYear()
    }, 1000 * 60 * 60 * 24);
  }
}