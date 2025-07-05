import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'sanitizer'
})
export class SanitizerPipe implements PipeTransform {
  bypassSecurityTrustUrl(url: any): any {
    throw new Error('Method not implemented.');
  }
  bypassSecurityTrustResourceUrl(url: any): any {
    throw new Error('Method not implemented.');
  }
  
  constructor( private sanitizer: DomSanitizer ) {}
  transform(url): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
