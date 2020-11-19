import { Component, OnInit } from '@angular/core';
import { productModel } from 'src/app/models/productmodel';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})

export class ProductDetailComponent implements OnInit 
{
  newproduct: productModel = null;
  constructor() { }

  ngOnInit(): void 
  {
  }

  prodInit(newproduct: productModel) 
  {
    this.newproduct = newproduct;
  }

}
