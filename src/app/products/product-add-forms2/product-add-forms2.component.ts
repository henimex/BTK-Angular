import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/category/category';
import { AlertifyService } from 'src/app/services/alertify.service';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-add-forms2',
  templateUrl: './product-add-forms2.component.html',
  styleUrls: ['./product-add-forms2.component.css'],
  providers: [CategoryService,ProductService]
})
export class ProductAddForms2Component implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private categoryService: CategoryService,
    private productService: ProductService,
    private alertifyService: AlertifyService,
  ) {}

  productAddForm: FormGroup;
  product: Product = new Product();
  categories: Category[];

  ngOnInit(): void {
    this.createProductAddForm();
    this.getCategories();
  }

  createProductAddForm() {
    this.productAddForm = this.formBuilder.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      categoryId: ['', Validators.required],
      description: ['', Validators.required],
      imageUrl: ['', Validators.required],
    });
  }

  addProduct() {
    if (this.productAddForm.valid) {
      this.product = Object.assign({}, this.productAddForm.value);
    }

    this.productService.addProduct(this.product).subscribe(response => {
      this.alertifyService.success(response.name + " Added Successfully")
    })
  }

  getCategories() {
    this.categoryService.getCategories().subscribe((response) => {
      this.categories = response;
    });
  }

  test(event: Event) {
    console.log(event);
    console.log("Nothing usefull for now");
  }
}
