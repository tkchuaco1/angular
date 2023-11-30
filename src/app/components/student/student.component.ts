import { Component, OnInit, Input } from '@angular/core';


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
  @Input() studentList : IStudent[] = [];
  ngOnInit(): void {}
}
