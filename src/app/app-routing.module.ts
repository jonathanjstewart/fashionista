import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { AdmincompComponent } from './admincomp/admincomp.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LogincompComponent } from './logincomp/logincomp.component';
import { ProductDetailComponent } from './productmanage-components/product-detail/product-detail.component';
import { RegistercompComponent } from './registercomp/registercomp.component';
import { CartcompComponent } from './shopping-components/cartcomp/cartcomp.component';
import { StorecompComponent } from './shopping-components/storecomp/storecomp.component';
import { ManageuserscompComponent } from './usermanage-components/manageuserscomp/manageuserscomp.component';
import { UsermenuComponent } from './usermenu/usermenu.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},{path:'login',component:LogincompComponent},{path:'register',component:RegistercompComponent},{path:'home',component:HomepageComponent},  
  // {path:'parentstore',component:StorecompComponent},{path:'parentcart',component:CartcompComponent},{path:'prodmanage',component:ProductDetailComponent},
  {path:'menu',component:UsermenuComponent,children:[{path:'',redirectTo:'menu',pathMatch:'full'},{path:'cart',component:CartcompComponent},{path:'store',component:StorecompComponent}]},
  {path:'admin',component:AdmincompComponent,children:[{path:'',redirectTo:'admin',pathMatch:'full'},{path:'products',component:ProductDetailComponent},{path:'users',component: ManageuserscompComponent}]}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  exports: [
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AppRoutingModule { }
