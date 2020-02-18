import { Component, OnInit, Input } from '@angular/core';
import { ISmallUserInfo } from 'src/app/core/interfaces/user-data-interfaces/userSmallData';
import { HelperService, CustomDateFormats } from 'src/app/core/services/helper.service';

@Component({
  selector: 'acr-user-sm',
  templateUrl: './user-small-info.component.html',
  styleUrls: ['./user-small-info.component.css']
})
export class UserSmallInfoComponent implements OnInit {

  @Input()
  user: ISmallUserInfo = null
  constructor() { }
  ngOnInit(): void {
  }

  get dateOfBlocking(): string {
    return HelperService.dateConvert(this.user.dateOfCreation, CustomDateFormats.DefaultFormater);
  }
}
