import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { productModel } from 'src/app/models/productmodel';
import { CartservicesService } from 'src/app/services/cartservices/cartservices.service';

@Component({
  selector: 'app-cartcomp',
  templateUrl: './cartcomp.component.html',
  styleUrls: ['./cartcomp.component.css']
})

export class CartcompComponent implements OnInit 
{

  products: Array<productModel> = [];
  product: productModel; 
  form1: FormGroup;
  
  total: number;
  

  constructor(protected cartservice: CartservicesService, private formbuilder: FormBuilder) { }

  ngOnInit(): void 
  {
    this.cartLoad();
  }

  private cartLoad() 
  {
    this.cartservice.retrieveCart().toPromise().then((res: Array<productModel>) => { 
      this.products = res;
    });

  }

  delete(id: string) 
  {
    this.cartservice.removeFromCart(id).toPromise().then((result: any) => this.cartLoad());
  }

  purchase(products)
  { 
    let quantity = 0;
    let price = 0;
    let totalCost = 0;
    let tmpTotal = 0;

    for (var product in products)
    {
      quantity = products[product].quantity;
      price = products[product].price;
      totalCost = quantity * price;
      tmpTotal += totalCost;
    }

    this.total = tmpTotal;
    this.form1 = this.formbuilder.group({})
        
  }
}
