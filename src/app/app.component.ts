import { Component } from "@angular/core";
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
  FormArray,
} from "@angular/forms";
import { PasswordMatchValidator } from "./custom-validators/passwordValidation";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "angular-learning";

  /**creating a model by formcontrol and formgroup*/
  // registrationForm = new FormGroup({
  //   userName: new FormControl(""),
  //   password: new FormControl(""),
  //   confirmPassword: new FormControl(""),
  //   address: new FormGroup({
  //     city: new FormControl(""),
  //     state: new FormControl(""),
  //     pinCode: new FormControl(""),
  //   }),
  // });

  /**creating a model by formbuilder*/
  getUserName() {
    return this.registrationForm.get("userName");
  }

  get alternativeEmail() {
    return this.registrationForm.get("alternativeEmail") as FormArray;
  }

  addAlternativeEmail() {
    /** here pushing control not group */
    this.alternativeEmail.push(this.fb.control(""));
  }

  constructor(public fb: FormBuilder) {}

  /**here validation is added at the parent group instead of the control, cuz at a time formcontrol takes one parameter */
  registrationForm = this.fb.group(
    {
      userName: ["", [Validators.required, Validators.minLength(3)]],
      password: [""],
      confirmPassword: [""],
      email: [""],
      address: this.fb.group({
        city: [""],
        state: [""],
        pinCode: [""],
      }),
      alternativeEmail: this.fb.array([]),
    },
    { validators: PasswordMatchValidator }
  );

  loadData() {
    /** setValue is strict used when all the fields data are filled */
    // this.registrationForm.setValue({
    //   userName: "Nav",
    //   password: "123465",
    //   confirmPassword: "123465",
    //   address: {
    //     city: "=",
    //     state: "new",
    //     pinCode: "123456",
    //   },
    // });

    /** pathValue is used when all the fields data are not mandatory */
    this.registrationForm.patchValue({
      userName: "Nav",
      password: "123465",
      confirmPassword: "123465",
    });
  }

  handleSubmit() {
    console.log(this.registrationForm.value);
    //TODO: send it to the backend side
  }
}
