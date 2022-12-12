import { PastComponent } from './past/past.component';
import { FutureComponent } from './future/future.component';
import { TodayComponent } from './today/today.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'', component: HomeComponent},
  {path:'today', component: TodayComponent},
  {path:'future', component: FutureComponent},
  {path:'past', component: PastComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
