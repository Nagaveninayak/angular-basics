import { Injectable } from "@angular/core";

/**
 * DI as a framework contd

  1) Define the EmployeeService class

  2) Register with Injector
  
  3) Declare as dependency in EmpList and EmpDetail
 */

/** injectable used when you need service inside this service (self injection)*/
@Injectable({
  providedIn: "root",
})
export class EmployeeService {
  getEmployee() {
    return [
      { id: 1, name: "Andrew", age: 30 },
      { id: 2, name: "Brandon", age: 25 },
      { id: 3, name: "Christina", age: 26 },
      { id: 4, name: "Elena", age: 28 },
      { id: 5, name: "Felicia", age: 25 },
    ];
  }

  constructor() {}
}
