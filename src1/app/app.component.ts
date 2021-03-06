import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Vaidika Rao Polineni, Welcome to your app';
  num:number[]=[2,1,4,3,6];
  phone:string = '9177021144';
  Email:string = 'polinenizz@gmail.com';

}
