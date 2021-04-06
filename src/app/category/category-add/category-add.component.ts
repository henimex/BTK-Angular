import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertifyService } from 'src/app/services/alertify.service';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from '../category';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css'],
  providers: [CategoryService]
})
export class CategoryAddComponent implements OnInit {
  categoryAddForm: FormGroup;
  category:Category = new Category();
  categories: Category[];
  constructor(
    private formBuilder: FormBuilder,
    private categoryService: CategoryService,
    private alertifyService: AlertifyService,
  ) {}

  ngOnInit(): void {
    this.createCategoryAddForm();
    this.getCategories();
  }

  createCategoryAddForm() {
    this.categoryAddForm = this.formBuilder.group({
      name: ['', Validators.required],
    });
  }

  addCategory() {
    if (this.categoryAddForm.valid) {
      this.category = Object.assign({}, this.categoryAddForm.value)
    }

    this.categoryService.addCategory(this.category).subscribe(response => {
      this.alertifyService.success(response.name + " Added Successfully")
      console.log(response)
    })
  }

  getCategories() {
    this.categoryService.getCategories().subscribe((response) => {
      this.categories = response;
    });
  }

}
