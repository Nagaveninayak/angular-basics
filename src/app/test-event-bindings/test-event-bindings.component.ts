import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-event-bindings',
  template: `
  <div>
    <h2> Event Bindings </h2>
    <button key = "1" (click) = "handleClick($event)">Click here</button>
    <button (click) = "textOnClick='bind without call'">Click</button>
    <h4>{{textOnClick}}</h4>
    <input type = "text" #inputValue />
    <button (click) = "handleSubmit(inputValue)">submit</button>
    <input type = "text" (keyup) = "textView = $event.target.value" />
    {{textView}}
    <br/> <br/>
    <input type = "text" [(ngModel)] = "textTyped"/>
    {{textTyped}}
  </div>`,
  styleUrls: []
})
export class TestEventBindingsComponent implements OnInit {

  public textOnClick = ""

  public textTyped = ""

  public textView = ""

  constructor() { }

  ngOnInit() {
  }

  handleClick(event) {
    console.log('cliked', event)
    this.textOnClick = "Button is clicked"
  }

  handleSubmit(event) {
    console.log('cliked', event, event.value)
  }

  handleInput(event) {
    console.log('cliked', event, event.target.value)
  }

}
