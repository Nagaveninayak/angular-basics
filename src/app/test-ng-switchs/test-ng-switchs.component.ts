import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-ng-switchs',
  template: `
    <div [ngSwitch] = "pickedColor">
      <h2 *ngSwitchCase = "'red'"> It's red color </h2>
      <h2 *ngSwitchCase = "'blue'"> It's blue color </h2>
      <h2 *ngSwitchCase = "'yellow'"> It's yellow color </h2>
      <h2 *ngSwitchDefault> Pick one </h2>
    </div>
  `,
  styles: []
})
export class TestNgSwitchsComponent implements OnInit {

  public pickedColor = "byellowlue";

  constructor() { }

  ngOnInit() {
  }

}
