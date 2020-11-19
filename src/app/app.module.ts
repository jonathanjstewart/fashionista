import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdmincompComponent } from './admincomp/admincomp.component';
import { LogincompComponent } from './logincomp/logincomp.component';
import { RegistercompComponent } from './registercomp/registercomp.component';
import { CartcompComponent } from './shopping-components/cartcomp/cartcomp.component';
import { StorecompComponent } from './shopping-components/storecomp/storecomp.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ManageuserscompComponent } from './usermanage-components/manageuserscomp/manageuserscomp.component';
//import { ManageproductscompComponent } from './productmanage-components/manageproductscomp/manageproductscomp.component';
import { ProductAddComponent } from './productmanage-components/product-add/product-add.component';
import { ProductEditComponent } from './productmanage-components/product-edit/product-edit.component';
import { ProductDetailComponent } from './productmanage-components/product-detail/product-detail.component';
import { UsermenuComponent } from './usermenu/usermenu.component';

@NgModule({
  declarations: [
    AppComponent,
    AdmincompComponent,
    LogincompComponent,
    RegistercompComponent,
    CartcompComponent,
    StorecompComponent,
    HomepageComponent,
    ManageuserscompComponent,
    //ManageproductscompComponent,
    ProductAddComponent,
    ProductEditComponent,
    ProductDetailComponent,
    UsermenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
