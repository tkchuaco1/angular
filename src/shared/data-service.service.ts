import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable,of, BehaviorSubject} from 'rxjs';
// const httpOptions ={
//   headers:new HttpHeaders({'Content-Type':'Application/json'})
// }
// const apiUrl = 'https://5f0c7a5911b7f60016055e6c.mockapi.io/Api/ahihi';
@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private _formDataSubject = new BehaviorSubject<any>(null);

  formData$ = this._formDataSubject.asObservable();

  setFormData(data: any){
    if(data !== null) {
      this._formDataSubject.next(data);
    }
  }
  fetchFormData(){
    return this.formData$;
  }
}

