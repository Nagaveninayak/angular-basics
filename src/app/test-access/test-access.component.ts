import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-access',
  template: `
  <div>
    <h3>Hello {{name}}</h3>
    <h4>{{2+4}}</h4>
    <h4>{{"Welcome " + name}}</h4>
    <h3>{{welcome()}}</h3>
    <input [id] = "myId" type = "text" value = "Nav"/> <br/><br/>
    <input [id] = "myId" [disabled] = "false" type = "text" value = "Nav"/>
  </div>`,
  styles: []
})
export class TestAccessComponent implements OnInit {

  public name = "Nav";

  public myId = "text123"

  constructor() { }

  ngOnInit() {
  }

  welcome() {
    return (
      `Welcome ${this.name}`
    )
  }

}
