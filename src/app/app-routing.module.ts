import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigComponent } from './config/config.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  {path :'productlist',component:ProductListComponent},
  {path :'config',component:ConfigComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
