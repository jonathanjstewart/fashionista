import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { productModel } from 'src/app/models/productmodel';
import { ProductservicesService } from 'src/app/services/productservices/productservices.service';
import { CartservicesService } from 'src/app/services/cartservices/cartservices.service';

@Component({
  selector: 'app-storecomp',
  templateUrl: './storecomp.component.html',
  styleUrls: ['./storecomp.component.css']
})

export class StorecompComponent implements OnInit 
{
  cartItem: productModel = null;
  products: Array<productModel> = []; 
  form1: FormGroup;

  constructor(protected productService:ProductservicesService, private formBuilder: FormBuilder, private shoppingService: CartservicesService) { }

  ngOnInit(): void 
  {
    this.productService.getAllProducts().toPromise().then((res: Array<productModel>) => {
      this.products = res;
    });
  }

  confirmCart(product)
  {
    this.cartItem = product;
    this.form1 = this.formBuilder.group({
      name: this.formBuilder.control(product.name),
      image: this.formBuilder.control(product.image),
      price: this.formBuilder.control(product.price),
      quantity: this.formBuilder.control(product.quantity),
      _id: this.cartItem._id
    })
  }

  addToCart()
  {
    var values = this.form1.value;
    this.shoppingService.addToCart(values).subscribe((result:any) => { })
    this.alertAdded();
  }

  alertAdded()
  {
    alert("Added to Cart!");

  }
}
