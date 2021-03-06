import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category } from 'src/app/models/category';
import { AlertifyService } from 'src/app/services/alertify.service';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-add-forms1',
  templateUrl: './product-add-forms1.component.html',
  styleUrls: ['./product-add-forms1.component.css'],
  providers: [CategoryService, ProductService]
})
export class ProductAddForms1Component implements OnInit {
  constructor(
    private categoryService: CategoryService, 
    private productService: ProductService,
    private alertifyService: AlertifyService) {}
  model: Product = new Product();
  categories: Category[];

  ngOnInit() {
    this.categoryService.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }

  add(form: NgForm) {
    //this.LogInformation(form);
    this.productService.addProduct(this.model).subscribe(data => {
      this.alertifyService.success("Product Added "+ data.name)
    });
  }

  private LogInformation(form: NgForm) {
    console.log(
      'Gelen Ürün Bilgisi ' +
      ' Name : ' +
      form.value.name +
      ' Price : ' +
      form.value.price +
      ' Category Id : ' +
      form.value.categoryId +
      ' Description : ' +
      form.value.description,
      ' Image Url : ' +
      form.value.imageUrl,
      ' PID : ' +
      form.value.id
    );
  }
}
