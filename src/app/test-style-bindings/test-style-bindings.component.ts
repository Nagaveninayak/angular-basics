import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-style-bindings',
  template: `
  <div>
    <h2 [style.color] = "'grey'" >Hello World !</h2>
    <h2 [style.color] = "colorPurple" >Hello World Binding!</h2>
    <h2 [style.color] = "isSuccess ? 'green' : 'red'" >Hello World Binding based on condition!</h2>
    <h2 [ngStyle] = "textStyle" >Hello World Multiple bindings!</h2>
  </div>
  `,
  styles: []
})

export class TestStyleBindingsComponent implements OnInit {

  /** binding the color property */
  public colorPurple = "purple";

  /** binding using the boolean results */
  public isSuccess = false;

  /** apply more than one style */
  public textStyle = {
    color: "blue",
    textAlign: "center",
    fontStyle: "bold"
  }

  constructor() { }

  ngOnInit() {
  }

}
