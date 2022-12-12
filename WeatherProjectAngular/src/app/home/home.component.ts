import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http:HttpClient){ }

  arr:any[] = []
  arr1:any[] = []
  arr2:any[] = []
  arr3:any[] = []
  arr4:any[] = []
  arr5:any[] = []
  ngOnInit(): void {
    this.http.get('https://api.openweathermap.org/data/2.5/weather?q=Tbilisi&appid=62f76f7cea70bfb2a2f32587a893ecd9')
    .subscribe((x:any)=>{
      // console.log(x)
      this.arr.push(x.main)
      this.arr1.push(x)
      this.arr2.push(x.weather[0])
      this.arr3.push(x.coord)
      this.arr4.push(x.sys)
      this.arr5.push(x.wind)
    })
  }
}
