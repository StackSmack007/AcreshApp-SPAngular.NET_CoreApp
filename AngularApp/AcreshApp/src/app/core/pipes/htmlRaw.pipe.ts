import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({ name: 'htmlRaw', pure: false })
export class HTMLRaw implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {
  }
  transform(content) {
    return this.sanitizer.bypassSecurityTrustHtml(content);
  }
}