import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ProductListComponent } from './components/shopping-cart/product-list/product-list.component';
import { ProductDetailComponent } from './components/shopping-cart/product-list/product-detail/product-detail.component';
import { ProductItemComponent } from './components/shopping-cart/product-list/product-item/product-item.component';
import { CategoryComponent } from './components/shopping-cart/category/category.component';
import { AdminpageComponent } from './components/cabinet/adminpage/adminpage.component';
import { EditproductComponent } from './components/cabinet/adminpage/editproduct/editproduct.component';
import {FormsModule} from '@angular/forms';
import { SigninpageComponent } from './components/cabinet/signinpage/signinpage.component';
import { EditComponent } from './components/cabinet/adminpage/edit/edit.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    ShoppingCartComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductItemComponent,
    CategoryComponent,
    AdminpageComponent,
    EditproductComponent,
    SigninpageComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
