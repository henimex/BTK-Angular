import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { AlertifyService } from '../services/alertify.service';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductService]
  //providers: [AlertifyService] // Compenent bazlı dependency Injection //Sepet Örnegi
})
export class ProductsComponent implements OnInit {
  //alertify servisini olusturdugumuzca cagrilacak yere injection yapılması gerekiyor
  //bu injection olayı muhtemelen ilerleyen derslerde bir merkezden kontrol edilcek.

  constructor(
    private alertifyService: AlertifyService,
    private productService: ProductService,
    private activatedRoot:ActivatedRoute
  ) {}
  title: string = 'Product List';
  filterText = '';
  products: Product[];

  ngOnInit(): void {

    this.activatedRoot.params.subscribe(x=>{
          this.productService.getProducts(x["categoryId"]).subscribe(data => {
      this.products = data
    });
    })
  }

  addToCart(product: Product) {
    this.alertifyService.success(
      'Sepete Eklendi : ' + product.name + ' \nFiyat : ' + product.price
    );
  }
}
