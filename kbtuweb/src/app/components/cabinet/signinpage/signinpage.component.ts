import { Component, OnInit } from '@angular/core';
import { strict } from 'assert';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-signinpage',
  templateUrl: './signinpage.component.html',
  styleUrls: ['./signinpage.component.css']
})
export class SigninpageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  signin(login: string){
  //Coming SOON TODO
  document.getElementById("h5Hide").style.display = "block";
  document.getElementById("h5Hide2").style.display = "block";
  document.getElementById("btnHide").style.display = "none";

  }

}
