import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {items} from '../database/products';
import {categories} from '../database/category';
import {ProductInterface} from '../database/productInterface';
import {CategoryInterface} from '../database/categoryInterface';
import {HttpClient} from '@angular/common/http';
export class LoginResponse {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  BASE_URL = 'http://127.0.0.1:8000';
 
  constructor(
    private http: HttpClient
  ) { }
  addItem(newProduct: ProductInterface){
    items.push(newProduct);
  }
  addCategory(newCategory: CategoryInterface){
    categories.push(newCategory);
  }

  deleteCategory(category: CategoryInterface){

  }
  deleteProduct(product: ProductInterface): Observable<ProductInterface[]>{
    // let deleteItem = categories.find(category => category.id ===id);
    // categories.filter()
    // const id = typeof hero === 'number' ? hero : hero.id;
    
    let index = product.id-1;
    delete items[index];
    return of(items.filter(function(ele){ return ele != product; }));
  }
// ---------------------------------------------------------------------------------------------------------------------------------
  getProduct(id: number): Observable<ProductInterface> {
    return this.http.get<ProductInterface>(`${this.BASE_URL}/api/products/${id}`);

    // return of(items.find(item => item.id === id));
  }
  getProducts(): Observable<ProductInterface[]> {
    return this.http.get<ProductInterface[]>(`${this.BASE_URL}/api/products/`);

    // return of(items);
  }
  getCategories(): Observable<CategoryInterface[]> {
    return this.http.get<CategoryInterface[]>(`${this.BASE_URL}/api/categories/`);

    // return of(categories);
  }
  getCategory(id: number): Observable<CategoryInterface> {
    // return of(categories.find(category => category.id === id));
    return this.http.get<CategoryInterface>(`${this.BASE_URL}/api/categories/${id}/`);

  }
  getProductsByCategoryId(id: number): Observable<ProductInterface[]> {
    return this.http.get<ProductInterface[]>(`${this.BASE_URL}/api/categories/${id}/products/`);

    // return of(items.filter(item => item.category_id === id));
  }
}
