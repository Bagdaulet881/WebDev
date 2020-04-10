import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import{users} from '../database/users';
import{UserInterface} from '../database/userInterface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUsers(): Observable<UserInterface[]> {
    return of(users);
  }
  getUser(login: string): Observable<UserInterface> {
    return of(users.find(user => user.login === login));
  }
  addUser(newUser: UserInterface){
    users.push(newUser);
  }
  deleteUser(user: UserInterface){
    //coming soon
  }
}
