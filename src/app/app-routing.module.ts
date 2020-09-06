import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CasesComponent } from './cases/cases.component';
import { CaseDetailsComponent } from './case-details/case-details.component';

const routes: Routes = [
  { path: 'cases', component: CasesComponent },
  { path: 'cases/:id', component: CaseDetailsComponent },
  { path: '', redirectTo: '/cases', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

