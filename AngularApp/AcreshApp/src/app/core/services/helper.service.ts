import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }

  toCS_keys(cam_obj: any): any {
    let result = {};
    Object.keys(cam_obj).forEach(key => {
      result[this.capitalize(key)] = cam_obj[key]
    })
    return result;
  }

  toJS_keys(pas_obj: any): any {
    let result = {};
    Object.keys(pas_obj).forEach(key => {
      result[this.deCapitalize(key)] = pas_obj[key]
    })
    return result;
  }


  private capitalize(str: string) {
    return str[0].toUpperCase() + str.substr(1)
  }

  private deCapitalize(str: string) {
    return str[0].toLowerCase() + str.substr(1)
  }
}
