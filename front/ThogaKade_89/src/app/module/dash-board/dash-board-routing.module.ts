import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './dash-board.component';

const routes: Routes = [
  { path: '', component: DashBoardComponent, children:[
      { path: 'customer', loadChildren: () => import('./modules/customer/customer.module').then(m => m.CustomerModule) },
      { path: 'item', loadChildren: () => import('./modules/item/item.module').then(m => m.ItemModule) },
      { path: 'orders', loadChildren: () => import('./modules/orders/orders.module').then(m => m.OrdersModule) },
      { path: 'place-order', loadChildren: () => import('./modules/place-order/place-order.module').then(m => m.PlaceOrderModule) }
    ] },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashBoardRoutingModule { }
