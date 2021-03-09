import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { AlertifyService } from '../services/alertify.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  //providers: [AlertifyService] // Compenent bazlı dependency Injection //Sepet Örnegi
})
export class ProductsComponent implements OnInit {
  //alertify servisini olusturdugumuzca cagrilacak yere injection yapılması gerekiyor
  //bu injection olayı muhtemelen ilerleyen derslerde bir merkezden kontrol edilcek.

  constructor(private alertifyService: AlertifyService, private http:HttpClient) {}
  title: string = 'Product List';
  filterText = '';
  products : Product[];

  ngOnInit(): void {
    this.http.get<Product>("http://localhost:3000/products").subscribe(data=>{
      this.products[10] = data;
    });


  }

  addToCart(product: Product) {
    this.alertifyService.success(
      'Sepete Eklendi : ' + product.name + ' \nFiyat : ' + product.price
    );
  }
}
