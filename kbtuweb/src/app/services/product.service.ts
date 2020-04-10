import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {items} from '../database/products';
import {categories} from '../database/category';
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
import {ProductInterface} from '../database/productInterface';
import {CategoryInterface} from '../database/categoryInterface';
>>>>>>> Admin Page, comments Done eeeeeee
>>>>>>> AdminPage, Comments Done eeeeeee

@Injectable({
  providedIn: 'root'
})
export class ProductService {
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> AdminPage, Comments Done eeeeeee

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
<<<<<<< HEAD
=======
=======
 
  constructor(
    
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

  getProduct(id: number): Observable<ProductInterface> {
    return of(items.find(item => item.id === id));
  }
  getProducts(): Observable<ProductInterface[]> {
    return of(items);
  }
  getCategories(): Observable<CategoryInterface[]> {
    return of(categories);
  }
  getCategory(id: number): Observable<CategoryInterface> {
    return of(categories.find(category => category.id === id));
  }
  getProductsByCategoryId(id: number): Observable<ProductInterface[]> {
>>>>>>> Admin Page, comments Done eeeeeee
>>>>>>> AdminPage, Comments Done eeeeeee
    return of(items.filter(item => item.category_id === id));
  }
}
