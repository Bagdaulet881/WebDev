import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {items} from '../database/products';
import {categories} from '../database/category';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  getProduct(id: number): Observable<any> {
    return of(items.find(item => item.id === id));
  }

  getProducts(): Observable<any> {
    return of(items);
  }
  getCategories(): Observable<any> {
    return of(categories);
  }
  getCategory(id: number): Observable<any> {
    return of(categories.find(category => category.id === id));
  }
  getProductsByCategoryId(id: number): Observable<any> {
    return of(items.filter(item => item.category_id === id));
  }
}
