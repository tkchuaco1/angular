import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { IStudent } from '../interface/student';

@Injectable({
  providedIn: 'root'
})

export class StudentService {
  private dataSubject: Subject<any> = new Subject<any>();
  data$: Observable<any> = this.dataSubject.asObservable();
  constructor(private httpClient: HttpClient) {}

  // fetch Data of all Student
  getAll() {
    return this.httpClient.get<IStudent[]>('http://localhost:3000/profile');
  }

  // create new Student
  create(data: IStudent) {
    return this.httpClient.post<any>('http://localhost:3000/profile', {
      ...data,
    });
  }

  delete(id: number){
    return this.httpClient.delete<any>(`http://localhost:3000/profile/${id}`);
    // return this.getAll();
  }

  // Observable to display Data  when add new student
  sendData(data: IStudent): void {
    this.dataSubject.next(data);
  }
}
