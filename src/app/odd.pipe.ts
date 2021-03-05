import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "odd"
})
export class OddPipe implements PipeTransform {
  transform(value: any[]): any[] {
    var results = [];
    for (let i = 0; i < value.length; i++) {
      if (i % 2 == 1) results.push(i);
    }
    return results;
  }
}
