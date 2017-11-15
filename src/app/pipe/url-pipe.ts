import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'domain'})
export class URLPipe implements PipeTransform {
  transform(urlString: string): string {
    const trimed = urlString.replace(/http:\/\//, '').replace(/https:\/\//, '');
    return trimed.split('/')[0];
    }
}
