import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import {AlertifyService} from '../services/alertify.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
  //providers: [AlertifyService] // Compenent bazlı dependency Injection //Sepet Örnegi
})
export class ProductsComponent implements OnInit {

  //alertify servisini olusturdugumuzca cagrilacak yere injection yapılması gerekiyor
  //bu injection olayı muhtemelen ilerleyen derslerde bir merkezden kontrol edilcek.

  constructor(private alertifyService: AlertifyService) { }
  title:string = "Product List";
  filterText = ""

  products:Product[]=[
    {id:1, name:"Game Desk", price:2500, categoryId:1, description:"MSI Gaming E-5", imageUrl:"https://productimages.hepsiburada.net/s/35/375/10491686354994.jpg"},
    {id:2, name:"Laptop", price:2100, categoryId:1, description:"Lenova ThinX", imageUrl:"https://www.lenovo.com/medias/lenovo-laptop-thinkpad-x-series-hero-family.png?context=bWFzdGVyfHJvb3R8MjU0OTcwfGltYWdlL3BuZ3xoNDIvaDkwLzExMzQ1MzUyNTU2NTc0LnBuZ3xlOTNjOWNlYzgzNjE0Y2M3MzBhZTczMDYwMmQxN2U2M2MzMGNjNmFmMDZhZmExNTIzNjhhMjdkYzliZjZlOGZl"},
    {id:3, name:"Keyboard", price:850, categoryId:3, description:"SteelSeries Apex X5", imageUrl:"https://www.qp.com.tr/pub/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/a/p/apex-5-1.jpg"},
    {id:4, name:"Game Station", price:12500, categoryId:1, description:"Henimex Hardware Gaming HX-o10", imageUrl:"https://storage-asset.msi.com/event/spb/2019/best-gaming-desktop-pc/images/kv-pd2020.png"},
    {id:5, name:"HeadPhones", price:1100, categoryId:2, description:"Corsair Void Pro", imageUrl:"https://www.qp.com.tr/pub/media/wysiwyg/urun_resimler/corsair/CA-9011150-EU/CA-9011150-EU-7.jpg"},
    {id:6, name:"Stream Cam", price:650, categoryId:6, description:"Logitech C922", imageUrl:"https://cdn.vatanbilgisayar.com/Upload/PRODUCT/logitech/thumb/v2-84662_large.jpg"},
    {id:7, name:"Fiber Router", price:500, categoryId:5, description:"ASUS Multi Point Fiber Router", imageUrl:"https://www.bhphotovideo.com/images/images2500x2500/asus_rt_ax89x_ax6000_dual_band_wifi_1558698.jpg"},
    {id:8, name:"Mouse", price:2600, categoryId:3, description:"Razer Basilistic V2", imageUrl:"https://images-na.ssl-images-amazon.com/images/I/710uCJC9mTL._AC_SL1500_.jpg"},
    {id:9, name:"Monitor", price:1850, categoryId:4, description:"MSI 27 165 HZ Curved VA", imageUrl:"https://images-na.ssl-images-amazon.com/images/I/61aWLD-bTRL._AC_SX569_.jpg"}
  ]

  ngOnInit(): void {
  }

  addToCart(product: Product){
    //alert("Sepete Eklendi : "+ product.name + " \nFiyat : " + product.price);
    //alertify.success("Sepete Eklendi : "+ product.name + " \nFiyat : " + product.price)
    this.alertifyService.success("Sepete Eklendi : "+ product.name + " \nFiyat : " + product.price)
  }

}
