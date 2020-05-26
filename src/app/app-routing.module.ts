  import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BcComponent } from './bc/bc.component';

const routes: Routes = [
  { path: "bc", component: BcComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
