import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RrViewComponent } from './features/rr-view/rr-view.component';

const routes: Routes = [
  { path: '', component: RrViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
