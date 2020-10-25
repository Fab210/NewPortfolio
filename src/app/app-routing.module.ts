import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortfolioPageComponent } from './portfolio-page/portfolio-page.component';

const routes: Routes = [

  { path: '', component: PortfolioPageComponent },
  /*{ path: '', redirectTo: '/portfolio', pathMatch: 'full' }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
