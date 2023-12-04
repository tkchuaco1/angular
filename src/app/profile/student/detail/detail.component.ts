import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../shared/services/student.service';
import { switchMap } from 'rxjs/operators';
import { IStudent } from '../../shared/interface/student';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  dataStudent : any
  constructor(private StudentService: StudentService) {
  }

  ngOnInit(): void {
    // getAll Data when  page first load
    this.StudentService.getAll().subscribe(e => {
      this.dataStudent = e
    })

    // subcribe & return data when All Data update
    this.StudentService.data$.subscribe((e) => {
      this.dataStudent = [...this.dataStudent||[],e]
    })
  }

  deleteItem(id: number) {
    // console.log('asd');

    this.StudentService.delete(id).subscribe((e) => {
      // this.StudentService.getAll().subscribe(e => {
      //   this.dataStudent = [...this.dataStudent || [],e]
      // })
      //  =  [...this.dataStudent || [],this.StudentService.getAll()];
    });
    // this.StudentService.getAll().subscribe(e => {
    //   this.dataStudent = e
    // })
  }
  editItem(id: any) {

  }
}
