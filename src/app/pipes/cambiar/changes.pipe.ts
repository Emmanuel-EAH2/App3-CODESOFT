import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'changes'
})
export class ChangesPipe implements PipeTransform {
// esta es otra forma
  // transform(value: string, mostrar: boolena=false): string {
 
  transform(value: string): string {
    return value.slice(0).replace['*'];
    // return (mostrar) ? '*'.repeat(value.length) : value;  
 }
}