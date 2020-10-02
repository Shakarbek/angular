import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { FillComponent } from './fill/fill.component';

const routes: Routes = [
  {
    path: 'fill',
    component: FillComponent
  }, 
  {
    path: 'create',
    component:CreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
