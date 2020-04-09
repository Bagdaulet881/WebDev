import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from  '../../../../services/product.service';
// import {CategoryService} from  '../.../../../../../category.service';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
item:any;
category:any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService,
    // private categoryService: CategoryService
  ) {
    this.router.events.subscribe((value =>{
      this.getProduct();
      this.getCategory();
    }));
  }

  ngOnInit(): void {
    this.getProduct();
    this.getCategory();
  }
  getProduct() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(id).subscribe(item => this.item = item);
  }
  getCategory(){
    this.productService.getCategory(this.item.category_id).subscribe(category => this.category = category);
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
