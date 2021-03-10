import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category } from 'src/app/category/category';
import { CategoryService } from 'src/app/services/category.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-add-forms1',
  templateUrl: './product-add-forms1.component.html',
  styleUrls: ['./product-add-forms1.component.css'],
  providers: [CategoryService],
})
export class ProductAddForms1Component implements OnInit {
  constructor(private categoryService: CategoryService) {}
  model: Product = new Product();
  categories: Category[];

  ngOnInit() {
    this.categoryService.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }

  add(form: NgForm) {
    this.LogInformation(form);
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
