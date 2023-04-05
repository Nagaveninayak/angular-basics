import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-ng-for',
  template: `
    <div *ngFor = "let fruit of fruits; index as i">
      <h3>{{i}} {{fruit}}</h3>
    </div>
  `,
  styles: []
})
export class TestNgForComponent implements OnInit {

  /**
   * some other methods in for loop
   * index as i
   * odd as o
   * even as e
   * first as f
   * last as l
   */

  public fruits = ['orange', 'grapes', 'mango']

  constructor() { }

  ngOnInit() {
  }

}
