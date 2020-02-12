import { Injectable } from '@angular/core';
const pad2 = (num: number): string => (num < 10 ? '0' : '') + num;

const dateFormats = {
  defaultformater: (d: Date) => `${pad2(d.getDate())}/${pad2(d.getMonth() + 1)}/${pad2(d.getFullYear())} [${d.getHours()} : ${pad2(d.getMinutes())}]`
}
export enum CustomDateFormats {
  DefaultFormater = 1,
}


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


  static getNextItem<T>(arr: T[], currentItem: T): T {
    let index: number = arr.indexOf(currentItem);
    index = (index + 1 === arr.length) ? 0 : index + 1
    return arr[index]
  }

  static getPreviousItem<T>(arr: T[], currentItem: T): T {
    let index: number = arr.indexOf(currentItem);
    index = (index === 0) ? arr.length - 1 : index - 1
    return arr[index]
  }

  dateConvert(date: string, formatFn: CustomDateFormats): string {
    let d = new Date(0); // The 0 there is the key, which sets the date to the epoch
    d.setUTCSeconds(Date.parse(date));
    return dateFormats[CustomDateFormats[formatFn].toLowerCase()](d);
  }
}
