import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-class-bindings',
  template: `
  <div>
    <h2 class = "text-style">Hello World !</h2>
    <h2 [class] = "successStyle">Hello World Success!</h2>
    <h2 [class.text-success] = "isSuccess">Hello World Success Bind!</h2>
    <h2 [ngClass] = "conditionRender">Hello World Condition Bind!</h2>
  </div>
  `,
  styles: [
    `
    .text-failure { 
        color: red
      }
    .text-success {
      color: green
    }
    .text-style {
      font-style: italic
    }
    `
  ]
})

export class TestClassBindingsComponent implements OnInit {

  /** bind based on the variable */
  public successStyle = "text-success"

  /** bind based on the condition */
  public isSuccess = true;

  /** note: you can't have both style and bind in a same element */

  /** condition rendering multiple styles class */
  public isStyle = true;

  public conditionRender = {
    "text-success": this.isSuccess,
    "text-failure": !this.isSuccess,
    "text-style": this.isStyle
  }

  constructor() { }

  ngOnInit() {
  }

}
