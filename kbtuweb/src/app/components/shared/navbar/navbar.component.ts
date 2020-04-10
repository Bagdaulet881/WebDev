import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from  '../../../services/product.service';
import {categories} from  '../../../database/category';
// import {CategoryService} from  '../.../../../../category.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  products: any;
  categories = categories;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService,
    // private categoryService: CategoryService
  ) {
    this.router.events.subscribe((value =>{
      this.getProducts();
      this.getCategory();
    }));
  }

  ngOnInit() {
    this.getProducts();
    // this.getCategory();
  }

  getProducts() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProductsByCategoryId(id).subscribe(products => this.products = products);
  }

  getCategory() {
    const id = +this.route.snapshot.paramMap.get('id');
    // this.categoryService.getCategory(id).subscribe(category => this.category = category);
  }
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
  logout(){
    document.getElementById("h5Hide").style.display = "none";
    document.getElementById("h5Hide2").style.display = "none";
    document.getElementById("btnHide").style.display = "block";
  }
>>>>>>> Admin Page, comments Done eeeeeee
>>>>>>> AdminPage, Comments Done eeeeeee
}
