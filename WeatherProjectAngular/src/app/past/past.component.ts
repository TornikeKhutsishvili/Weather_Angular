import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-past',
  templateUrl: './past.component.html',
  styleUrls: ['./past.component.css']
})
export class PastComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    // this.http.get('https://api.openweathermap.org/data/2.5/weather?q=Tbilisi&appid==62f76f7cea70bfb2a2f32587a893ecd9')
    // .subscribe((z:any) =>{
    //   console.log(z)
    //   console.log(z.list)
    // })
  }

}
