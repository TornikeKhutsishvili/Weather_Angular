import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FutureComponent } from './future/future.component';
import { PastComponent } from './past/past.component';
import { TodayComponent } from './today/today.component';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './nav/nav.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FutureComponent,
    PastComponent,
    TodayComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
