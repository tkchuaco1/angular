import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  formData: any;
  patchDataToChildComponent(data : any){
    this.formData = data
    console.log(this.formData)
  }
}
