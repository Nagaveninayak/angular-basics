import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TestComponent } from "./test/test.component";
import { TestAccessComponent } from "./test-access/test-access.component";
import { TestClassBindingsComponent } from "./test-class-bindings/test-class-bindings.component";
import { TestStyleBindingsComponent } from "./test-style-bindings/test-style-bindings.component";
import { TestEventBindingsComponent } from "./test-event-bindings/test-event-bindings.component";
import { TestNgIfsComponent } from "./test-ng-ifs/test-ng-ifs.component";
import { TestNgSwitchsComponent } from "./test-ng-switchs/test-ng-switchs.component";
import { TestNgForComponent } from "./test-ng-for/test-ng-for.component";
import { TestPipesComponent } from "./test-pipes/test-pipes.component";
import { EmployeeDetailComponent } from "./employee-details/employee-detail.component";
import { EmployeeListComponent } from "./employee-list/employee-list.component";

import { EmployeeService } from "./employee.service";

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    TestAccessComponent,
    TestClassBindingsComponent,
    TestStyleBindingsComponent,
    TestEventBindingsComponent,
    TestNgIfsComponent,
    TestNgSwitchsComponent,
    TestNgForComponent,
    TestPipesComponent,
    EmployeeListComponent,
    EmployeeDetailComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [EmployeeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
