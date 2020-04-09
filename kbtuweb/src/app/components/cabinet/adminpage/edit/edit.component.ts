import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from  '../../../../services/product.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  items: any;
  category2: any;
  categories: any;
  constructor( private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService
    ) { 
      this.router.events.subscribe((value =>{
      this.getProducts();
      this.getCategories();
      this.getCategory(1);
      
        // this.getProduct();
        // this.getCategory();
      }));
    }

  ngOnInit(): void {
    this.recipeItem();
    this.getProducts();
    this.getCategories();
    // this.getProduct();
    this.getCategory(1);
  }


  categoryItem(){
    document.getElementById("recipe").classList.remove("active");
    document.getElementById("category").classList.add("active");
    document.getElementById("recipes").style.display = "none";
    document.getElementById("categories").style.display = "block";
    document.getElementById("editPanel").style.display = "none";

  }

  recipeItem(){
    document.getElementById("category").classList.remove("active");
    document.getElementById("recipe").classList.add("active");
    document.getElementById("recipes").style.display = "block";
    document.getElementById("categories").style.display = "none";
    document.getElementById("editPanel").style.display = "none";

  }


  showEditPanel(){
    document.getElementById("editPanel").style.display = "block";
  }


  getProducts(){
    this.productService.getProducts().subscribe(items => this.items = items);
  }
  getCategories(){
    this.productService.getCategories().subscribe(categories => this.categories = categories);
  }
  getProductsByCategoryId(id: number) {
    // const id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProductsByCategoryId(id).subscribe(items => this.items = items);
  }
  // getProduct() {
  //   const id = +this.route.snapshot.paramMap.get('id');
  //   this.productService.getProduct(id).subscribe(item => this.item = item);
  // }
  getCategory(id: number){
    this.productService.getCategory(id).subscribe(category => this.category2 = category);
  }
  getColor(indexOf:number){
    indexOf++;
    if(indexOf%2==0){
    return "white";
    }else{
      return "rgb(219, 234, 234)";
    }
  }
}
