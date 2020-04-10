import { Component, OnInit } from '@angular/core';
import {ProductInterface} from '../../../../database/productInterface'
import {CategoryInterface} from '../../../../database/categoryInterface'
import {UserInterface} from '../../../../database/userInterface'
import {ProductService} from  '../../../../services/product.service';
import {UserService} from  '../../../../services/user.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  // private product: ProductInterface
  items: any
  category: any
  categories: any
  selectedItem;
  constructor( 
    private productService: ProductService,
    private userService: UserService
   ) {
    this.getProducts();
    this.getCategories();
    }

  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }
  add(category_id:number,name: string, time: string, description: string, rating: string, image: string, ingredients: string, methods: string): void{
    class Product implements ProductInterface{
      id: number;
      category_id: number;
      name: string;
      time: string;
      description: string;
      image: string;
      rating: string;
      ingredients: string[];
      methods:string[];
    }
    let product = new Product();
    
    product.id=this.autoIncrement("prod");
    product.category_id=category_id;
    product.name = name;
    product.time=time;
    product.description=description;
    product.rating=rating;
    product.image=image;
    product.ingredients = this.split(ingredients);
    product.methods = this.split(methods);
    alert(this.autoIncrement("prod") + " th recipe added to category " + this.getCategory(product.category_id));
    this.productService.addItem(product);
  }
  addCategory(name: string, time: string, link: string){
      class Category implements CategoryInterface{
        img_link: string;
        time: string;
        name: string;
        id: number;
      }
      let cat = new Category();

      cat.id = this.autoIncrement("cat");
      cat.name = name;
      cat.time = time;
      cat.img_link = link;
      alert(this.autoIncrement("cat") + " category added");
      this.productService.addCategory(cat)
  }
  addUser(name: string, lname: string,login: string, password: string, isSuperUser: string){
    class User implements UserInterface{
      name: string;
      lname: string;
      login: string;
      password: string;
      isSuperUser = false;
    }
    let user = new User();
    user.name = name;
    user.lname = lname;
    user.login = login;
    user.password = password;
    if(isSuperUser == "true"){
      user.isSuperUser = true;
    }
    alert(user.name + " added");
    this.userService.addUser(user);
  }
  split(text:string): any{
    var splitted = text.split(/[\s,]+/);  
    return splitted;
  }
  autoIncrement(txt: string): number{
    if(txt=="prod"){
      let nextId = this.items[this.items.length-1].id;
      nextId++;
      return nextId;
    }else{
      let nextId = this.categories[this.categories.length-1].id;
      nextId++;
      return nextId;
    }
  }
  getSelectedItem(): number{//used dropdown menu INPUT
    return this.selectedItem;
  }
  getProducts(){
    this.productService.getProducts().subscribe(items => this.items = items);
  }
  getCategory(id: number): String{
    this.productService.getCategory(id).subscribe(category => this.category = category);
    return this.category.name;
  }
  getCategories(){
    this.productService.getCategories().subscribe(categories => this.categories = categories);
  }

}
