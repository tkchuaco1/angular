import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms'
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Output() formSubmited = new EventEmitter<any>();
  @Output() data = new EventEmitter<any>();
  allData : Object[] = []
  FormStudent = new FormGroup({
    name: new FormControl('',Validators.required),
    age: new FormControl('',Validators.required),
    dob: new FormControl('',Validators.required),
    tel: new FormControl('', [Validators.required, this.phoneNumberValidator]),
    sex: new FormControl('',Validators.required)
  });
  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if(this.FormStudent.valid){
      // console.log(typeof(this.FormStudent.value))
      let FormData = this.FormStudent.value
      this.allData.push(FormData)
      // FormData.push(this.FormStudent.value)
      this.formSubmited.emit(this.allData)
    }
    else {
      this.validateAllFormFields(this.FormStudent)
    }
  }
  phoneNumberValidator(control: any) {
    const phoneNumberPattern = /^[0-9]{4} [0-9]{3} [0-9]{3}$/;

    return phoneNumberPattern.test(control.value) ? null : { invalidPhoneNumber: true };
  }
  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

}
