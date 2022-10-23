import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { ConfigComponent } from './config/config.component';
import { OrderComponent } from './order/order.component';
import { OrderListComponent } from './order-list/order-list.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductComponent,
    FormComponent,
    ConfigComponent,
    OrderComponent,
    OrderListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
