import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfinityLoadingComponent } from './infinity-loading/infinity-loading.component';

const routes: Routes = [
  {
    path: '', component: InfinityLoadingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
