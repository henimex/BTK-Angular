import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CategoryComponent } from './category/category.component';
import { ProductsComponent } from './products/products.component';
import { ProductFilterPipe } from './products/product-filter.pipe';
import { ProductAddForms1Component } from './products/product-add-forms1/product-add-forms1.component';
import { ProductAddForms2Component } from './products/product-add-forms2/product-add-forms2.component';
import { AlertifyService } from './services/alertify.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CategoryComponent,
    ProductsComponent,
    ProductFilterPipe,
    ProductAddForms1Component,
    ProductAddForms2Component
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [AlertifyService],
  bootstrap: [AppComponent],
})
export class AppModule {}
