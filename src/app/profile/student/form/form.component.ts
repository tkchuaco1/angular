import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms'
import { StudentService } from '../../shared/services/student.service';
import { switchMap } from 'rxjs/operators';
import { IStudent } from '../../shared/interface/student';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  formStudent: FormGroup = new FormGroup({});

  constructor(private _formBuilder: FormBuilder,private _studentService: StudentService) {
  }

  //create form control
  ngOnInit(): void {
    this.formStudent = this._formBuilder.group({
      'name': new FormControl(),
      'dob': new FormControl(),
      'phoneNumber': new FormControl()
    });
  }

  // action when form add new submit
  onSubmit(){
    // Listen every time student add new
    this._studentService
      .create(this.formStudent.getRawValue()).subscribe((finalData: IStudent) => {
        this._studentService.sendData(finalData)
      });
  }
}
