import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SenatorExpensesComponent } from './senator-expenses/senator-expenses.component';
import { SenatorsListComponent } from './senators-list/senators-list.component';

const routes: Routes = [
    { path: 'senadores', component: SenatorsListComponent },
    {path: '', redirectTo: 'senadores', pathMatch : 'full'},
    {path: 'senadores/:id', component: SenatorExpensesComponent, pathMatch: "full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
