import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Category } from '../category/category';
import { tap, catchError } from 'rxjs/operators';

@Injectable()
export class CategoryService {
  constructor(private http: HttpClient) {}
  path = 'http://localhost:3000/categories';

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.path)
    .pipe(
      tap((data) => console.log(/*JSON.stringify(data))*/ "1 Loglama Mantıgı : Tap Veriler Listelendi")),
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