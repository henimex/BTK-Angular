import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Product } from '../products/product';
import { tap, catchError } from 'rxjs/operators';

@Injectable()
export class ProductService {
  constructor(private http: HttpClient) {}
  path = 'http://localhost:3000/products';

  getProducts(categoryId:number): Observable<Product[]> {
    let newPath = this.path;
    if (categoryId) { newPath += "?categoryId=" + categoryId };
    return this.http.get<Product[]>(newPath)
    .pipe(
      tap((data) => console.log(/*JSON.stringify(data))*/ "Veriler Listelendi")),
      catchError(this.handleError)
    )
  }

  addProduct(product:Product): Observable<Product>{
    const httpOptions = {
      headers:new HttpHeaders({
        'ContentType':'application/json',
        'Authorization':'Token'
      })
    }
    return this.http.post<Product>(this.path, product, httpOptions)
    .pipe(
      tap((data) => console.log(/*JSON.stringify(data))*/ "Veriler Listelendi")),
      catchError(this.handleError)
    )
  }

  handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = 'Hata !! ' + err.error.message;
    } else {
      errorMessage = 'Sistemsel hata oluştu'
    }
    return throwError(errorMessage);
  }
}
