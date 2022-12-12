import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-future',
  templateUrl: './future.component.html',
  styleUrls: ['./future.component.css']
})
export class FutureComponent implements OnInit {

  constructor(private http:HttpClient){ }

  ngOnInit(): void {
    // this.http.get('http://api.openweathermap.org/data/2.5/forecast/daily?q=London&cnt=3&appid=62f76f7cea70bfb2a2f32587a893ecd9')
    // .subscribe((y:any)=>{
    //   console.log(y.weather)
    //   console.log(y)
    //   console.log(y.main)
    // })
  }
}
