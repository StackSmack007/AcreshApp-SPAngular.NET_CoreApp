import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
const pad2 = (num: number): string => (num < 10 ? '0' : '') + num;

const dateFormats = {
  defaultformater: (d: Date) => `${pad2(d.getDate())}/${pad2(d.getMonth() + 1)}/${d.getFullYear()} [${d.getHours()} : ${pad2(d.getMinutes())}]`
}
export enum CustomDateFormats {
  DefaultFormater = 1,
}

function convertToCurrentDateTime(date: Date): Date {
  const offsetHours = new Date().getTimezoneOffset() / -60;
  date.setHours(date.getHours() + offsetHours);
  return date;
}

const DateTimeCStoJS = (date: string, symbol = "T") => {
  let t = {};
  let csDate = date.split("-");
  t["year"] = +csDate.shift();
  t["month"] = +csDate.shift();
  csDate = csDate[0].split(symbol);

  t["date"] = +csDate.shift();
  csDate = csDate[0].split(":");
  t["hours"] = +csDate.shift();
  t["minutes"] = +csDate.shift();
  csDate = csDate[0].split(".");
  t["seconds"] = +csDate.shift();
  t["ms"] = 1000 * +(`0.` + csDate.shift());
  //let result = new Date(t["year"], t["month"], t["date"], t["hours"], t["minutes"], t["seconds"], t["ms"]);
  const result = convertToCurrentDateTime(new Date(t["year"], t["month"], t["date"], t["hours"], t["minutes"], t["seconds"], t["ms"]));
  // let offsetHours = new Date().getTimezoneOffset() / -60;
  // result.setHours(result.getHours() + offsetHours);
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
  public static timeElapsed(time: number, months = false): string {
    const timeDifference = Date.now() / 1000 - time; // Unix timestamp in milliseconds
    const hr = 3600;
    if (timeDifference < hr) return `${Math.floor((timeDifference) / 60)} mins ago`
    if (timeDifference < hr * 24) return `${Math.floor((timeDifference) / (hr))} hours ago`
    if (timeDifference < hr * 24 * 31) return `${Math.floor((timeDifference) / (24 * hr))} days ago`
    if (months && timeDifference < hr * 24 * 30 * 30.45) return `${Math.floor((timeDifference) / (24 * hr * 30.45))} months ago`
    let d = new Date(0); // The 0 there is the key, which sets the date to the epoch
    d.setUTCSeconds(time);
    d = convertToCurrentDateTime(d);
    return `${pad2(d.getDay() + 1)}.${pad2(d.getMonth() + 1)}.${d.getFullYear()}`
  }

  public static fixJsonNumbers(obj: any): any {
    let result = {};
    Object.keys(obj).forEach(key => {
      let value = obj[key];
      if (!isNaN(obj[key])) {
        result[key] = Number(value);
      } else if (typeof (value) === "object") {
        result[key] = this.fixJsonNumbers(value);
      } else {
        result[key] = value;
      }
    })
    return result;
  }

  public static compareObjects = (obj1, obj2) => {
    if(!obj1||!obj2) return false;
    let result = true;
    Object.entries(obj1).forEach(([key, value]) => {
      if (value.toString() === obj2[key].toString()) { return; }
      if (JSON.stringify(value) !== JSON.stringify(obj2[key])) { result = false; }
    })
    return result;
  }

  public static appJsonHeader = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private capitalize(str: string) {
    return str[0].toUpperCase() + str.substr(1)
  }

  private deCapitalize(str: string) {
    return str[0].toLowerCase() + str.substr(1)
  }

  static videoLinkMake = (id) => `https://www.youtube.com/embed/${id}?rel=0`

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

  static dateConvert(date: string, formatFn: CustomDateFormats): string {
    return dateFormats[CustomDateFormats[formatFn].toLowerCase()](DateTimeCStoJS(date));
  }
}
