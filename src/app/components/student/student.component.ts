import { Component, OnInit, Input } from '@angular/core';
import { DataServiceService } from '../../../shared/data-service.service';
interface IStudent {
  name: string,
  age: string,
  dob: Date,
  tel: string,
  sex: string
}
@Component({
  selector: 'app-crud',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
  styles: [' table, th, td {border: 1px solid black;}']
})
export class  StudentComponent implements OnInit {
  studentList : IStudent[] = [];
  constructor(private _DataService: DataServiceService) {
  }

  ngOnInit(): void {
    this._DataService.fetchFormData().subscribe(data => {
      this.studentList =  [...this.studentList||[],data]
    })
  }
}
