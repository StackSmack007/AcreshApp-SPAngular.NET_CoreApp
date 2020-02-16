import { Injectable } from '@angular/core';
const pad2 = (num: number): string => (num < 10 ? '0' : '') + num;

const dateFormats = {
  defaultformater: (d: Date) => `${pad2(d.getDate())}/${pad2(d.getMonth() + 1)}/${d.getFullYear()} [${d.getHours()} : ${pad2(d.getMinutes())}]`
}
export enum CustomDateFormats {
  DefaultFormater = 1,
}



const DateTimeCStoJS = (date: string) => {
  let t = {};
  let csDate = date.split("-");
  t["year"] = +csDate.shift();
  t["month"] = +csDate.shift();
  csDate = csDate[0].split(" ");

  t["date"] = +csDate.shift();
  csDate = csDate[0].split(":");
  t["hours"] = +csDate.shift();
  t["minutes"] = +csDate.shift();
  csDate = csDate[0].split(".");
  t["seconds"] = +csDate.shift();
  t["ms"] = 1000 * +(`0.` + csDate.shift());
  let result = new Date(t["year"], t["month"], t["date"], t["hours"], t["minutes"], t["seconds"], t["ms"]);
  let offsetHours = new Date().getTimezoneOffset() / -60;
  result.setHours(result.getHours() + offsetHours);
  return new Date(result);
}



@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }

  // toCS_keys(cam_obj: any): any {
  //   let result = {};
  //   Object.keys(cam_obj).forEach(key => {
  //     result[this.capitalize(key)] = cam_obj[key]
  //   })
  //   return result;
  // }

  // toJS_keys(pas_obj: any): any {
  //   let result = {};
  //   Object.keys(pas_obj).forEach(key => {
  //     result[this.deCapitalize(key)] = pas_obj[key]
  //   })
  //   return result;
  // }

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
    return dateFormats[CustomDateFormats[formatFn].toLowerCase()](DateTimeCStoJS(date));
  }
}
