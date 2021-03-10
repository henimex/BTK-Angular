import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductAddForms1Component } from './products/product-add-forms1/product-add-forms1.component';
import { ProductAddForms2Component } from './products/product-add-forms2/product-add-forms2.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'product-add-1', component: ProductAddForms1Component },
  { path: 'product-add-2', component: ProductAddForms2Component },
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products/category/:categoryId', component: ProductsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
