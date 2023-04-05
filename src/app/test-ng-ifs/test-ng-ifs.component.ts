import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-ng-ifs',
  template: `
    <div>
      <h2> Adding if else statements </h2>

      <h2 *ngIf = "true">
        Displayed without binding
      </h2>
      <br/>

      <h2 *ngIf = "isDisplayed; else elseBlock">
        Displayed with binding
      </h2>
      <ng-template #elseBlock>
        Hidden
      </ng-template>
      <br/>

      <ng-template #thenBlock> Show By then </ng-template>
      <ng-template #elseBlock1> Hidden By else </ng-template>
      <div *ngIf = "isDisplayed; then thenBlock; else elseBlock1"></div>

    </div>
  `,
  styles: []
})
export class TestNgIfsComponent implements OnInit {

  public isDisplayed = false

  constructor() { }

  ngOnInit() {
  }

}

//TODO: if elseif else condition