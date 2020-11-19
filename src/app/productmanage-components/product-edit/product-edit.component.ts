import { Component, Input, OnInit, Output } from '@angular/core';
import { productModel } from 'src/app/models/productmodel';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductservicesService } from 'src/app/services/productservices/productservices.service';


@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})

export class ProductEditComponent implements OnInit 
{
  updatedProduct: productModel = null;
  form1: FormGroup;
  products: Array<productModel> = [];
  @Input() products_d: productModel = null;
   


  constructor(protected productservice : ProductservicesService, private formbuilder: FormBuilder) { }

  ngOnInit(): void 
  {
    this.form1 = this.formbuilder.group({
      name: this.formbuilder.control(''),
      type: this.formbuilder.control(''),
      image: this.formbuilder.control(''),
      price: this.formbuilder.control(''),
      quantity: this.formbuilder.control('')
    });

    this.productLoad();
  }

  ngOnChanges(): void 
  {
    if (this.products_d !== null) 
    {
      this.products.push(this.products_d);
    }
  }

  delete(id: string) 
  {
    this.productservice.removeProduct(id).toPromise().then((result: any) => 
      this.productLoad());
  }

  private productLoad() 
  {
    this.productservice.getAllProducts().toPromise().then((res: Array<productModel>) => {
      this.products = res;
    });

  }

  prodUP()
  {
    var values = this.form1.value;

    this.productservice.editProduct(values).toPromise().then((result) => {
      const index = this.products.findIndex(
        index => index._id === values._id);
      this.products[index] = values;
    })    
  }

  fillUpdateForm(product)
  {
    this.updatedProduct = product;

    this.form1 = this.formbuilder.group({
      name: this.formbuilder.control(product.name),
      type: this.formbuilder.control(product.type),
      image: this.formbuilder.control(product.image),
      price: this.formbuilder.control(product.price),
      quantity: this.formbuilder.control(product.quantity),
      _id: this.updatedProduct._id
    })
  }

}
