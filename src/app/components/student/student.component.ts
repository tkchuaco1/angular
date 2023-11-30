import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms'


@Component({
  selector: 'app-crud',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
  styles: [' table, th, td {border: 1px solid black;}']
})
export class  StudentComponent implements OnInit {
  student  = {
    name: '',
    age: '',
    dob: '',
    tel: '',
    sex: '',
  }

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
    if(this.FormStudent.valid) {
      this.student.name = this.FormStudent.value.name as string;
      this.student.age = this.FormStudent.value.age as string;
      this.student.dob = this.FormStudent.value.dob as string;
      this.student.tel = this.FormStudent.value.tel as string;
      this.student.sex = this.FormStudent.value.sex as string;
    }else{
      this.validateAllFormFields(this.FormStudent)
    }
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
  phoneNumberValidator(control: any) {
    const phoneNumberPattern = /^[0-9]{4} [0-9]{3} [0-9]{3}$/;

    return phoneNumberPattern.test(control.value) ? null : { invalidPhoneNumber: true };
  }
}
