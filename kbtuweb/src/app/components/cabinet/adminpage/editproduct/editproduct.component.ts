import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from  '../../../../services/product.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {
  item:any;
  category:any;
  constructor( private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService,
    private location: Location
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
  trackByIdx(index: number, obj: any): any {
    return index;
  }
  goBack(): void {
    this.location.back();
  }
}
