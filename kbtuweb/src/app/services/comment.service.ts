import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import{CommentInterface} from '../database/commentInterface';
import{comments} from '../database/comments';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor() { }


  addComment(newComment: CommentInterface):Observable<CommentInterface[]>{
    comments.push(newComment);
    let temp = this.getCommentsByProductId(newComment.product_id);
    return (temp);
  }
  getComments():Observable<CommentInterface[]>{
    return of(comments);
  }

  getCommentsByProductId(id: number):Observable<CommentInterface[]>{
    return of(comments.filter(comments => comments.product_id === id));
  }
}
