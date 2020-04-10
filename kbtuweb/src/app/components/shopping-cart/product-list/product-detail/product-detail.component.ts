import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from  '../../../../services/product.service';
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
import {CommentService} from  '../../../../services/comment.service';
import{ProductInterface}from '../../../../database/productInterface';
import{CategoryInterface}from '../../../../database/categoryInterface';
import { from } from 'rxjs';
import { comments } from 'src/app/database/comments';
import { CommentInterface } from 'src/app/database/commentInterface';
>>>>>>> Admin Page, comments Done eeeeeee
>>>>>>> AdminPage, Comments Done eeeeeee
// import {CategoryService} from  '../.../../../../../category.service';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
<<<<<<< HEAD
item:any;
category:any;
=======
<<<<<<< HEAD
item:any;
category:any;
=======
item: ProductInterface
category: CategoryInterface
comments: CommentInterface[]
allcomments: CommentInterface[]
>>>>>>> Admin Page, comments Done eeeeeee
>>>>>>> AdminPage, Comments Done eeeeeee
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService,
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
    private commentService: CommentService,
>>>>>>> Admin Page, comments Done eeeeeee
>>>>>>> AdminPage, Comments Done eeeeeee
    // private categoryService: CategoryService
  ) {
    this.router.events.subscribe((value =>{
      this.getProduct();
      this.getCategory();
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
      this.getCommentsByProductId();
>>>>>>> Admin Page, comments Done eeeeeee
>>>>>>> AdminPage, Comments Done eeeeeee
    }));
  }

  ngOnInit(): void {
    this.getProduct();
    this.getCategory();
<<<<<<< HEAD
  }
=======
<<<<<<< HEAD
  }
=======
    this.getCommentsByProductId();
  }
  
  sendComment(login: string, text: string){
    class Comment implements CommentInterface{
      id: number;
      product_id: number;
      login: string;
      date: string;
      text: string;
    }
    let newComment = new Comment();
    newComment.id = this.autoIncrement();
    newComment.product_id = +this.route.snapshot.paramMap.get('id');
    newComment.login = login;
    newComment.date = new Date().toString();
    newComment.text = text;
    alert("sent!");
    this.commentService.addComment(newComment).subscribe(comments => this.comments = comments);
  }
  autoIncrement(): number{
    this.getComments();
    let nextId = this.allcomments[this.allcomments.length-1].id;
    nextId++;
    return nextId;
  }
  getCommentsByProductId(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.commentService.getCommentsByProductId(id).subscribe(comments => this.comments = comments);
  }
  getComments(){
    this.commentService.getComments().subscribe(comments => this.allcomments = comments);
  }

>>>>>>> Admin Page, comments Done eeeeeee
>>>>>>> AdminPage, Comments Done eeeeeee
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
