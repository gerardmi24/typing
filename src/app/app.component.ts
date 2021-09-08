import { Component } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  randomText = lorem.sentence();

  onInput(value: any) {
    // const parsedValue = parseInt(value.target.useDebugValue(value))
    console.log('value:::', value.target.value);
    // const parsedValue=parseInt(value.target.value)
    // if(!isNaN(parsedValue)) {
    //    parsedValue
    // }
  }
}
