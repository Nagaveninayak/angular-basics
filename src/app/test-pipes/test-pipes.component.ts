import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-pipes',
  template: `
    <h2>{{str}}</h2>
    <h2>{{ str | slice:3:5}}</h2>
    <h2>{{ str | lowercase}}</h2>
    <h2>{{ str | uppercase}}</h2>
    <h2>{{ str | titlecase}}</h2>
    <h2>{{ person | json }}</h2>
    
    <h2>{{5.678 | number: '1.2-3'}}</h2>
    <h2>{{5.678 | number: '3.4-5'}}</h2>
    <h2>{{5.678 | number: '3.1-2'}}</h2>
  `,
  styles: []
})

/** 
 * pipes are bascially the modification you do on a variable before rendering
 * But the modification will not modify the variable itself on the class
 */
export class TestPipesComponent implements OnInit {

  public str = 'Hello world'

  public person = {
    firstName: "Lumine",
    lastName: "Nav"
  }

  constructor() { }

  ngOnInit() {
  }

}
