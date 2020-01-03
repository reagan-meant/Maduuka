import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PurchaseComponent } from './purchase/purchase.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DebtsComponent } from './debts/debts.component';
import { PaymentsComponent } from './payments/payments.component';
import { SellsComponent } from './sells/sells.component';
import { SummaryComponent } from './summary/summary.component';


const routes: Routes = [
  { path: '', redirectTo: '/purchase', pathMatch: 'full' },
  { path: 'purchase', component: PurchaseComponent, children: [] },
  { path: 'debts', component: DebtsComponent },
  { path: 'payments', component: PaymentsComponent },
  { path: 'sells', component: SellsComponent },
  { path: 'summary', component: SummaryComponent },
  { path: '**', component: PageNotFoundComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
