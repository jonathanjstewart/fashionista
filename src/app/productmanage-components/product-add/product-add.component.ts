import { Component, OnInit, Output } from '@angular/core';
import { productModel } from 'src/app/models/productmodel';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductservicesService } from 'src/app/services/productservices/productservices.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  form1: FormGroup;
  errors: string; // error message in console for testing 


  @Output() newproduct = new EventEmitter<productModel>();

  constructor(private formbuilder: FormBuilder, private productservice: ProductservicesService) { }

  ngOnInit(): void 
  {
    // set up initial forms
    this.form1 = this.formbuilder.group({
      name: this.formbuilder.control(''),
      type: this.formbuilder.control(''),
      image: this.formbuilder.control(''),
      price: this.formbuilder.control(''),
      quantity: this.formbuilder.control('')
    });

  }

  newProduct() 
  {
    var product = this.form1.value;

    this.productservice.addProduct(product).subscribe((result: any) => {
      this.newproduct.emit(result);
    },
    error => {
        console.log('error creating product');
        this.errors = error;
      })
  }

}
