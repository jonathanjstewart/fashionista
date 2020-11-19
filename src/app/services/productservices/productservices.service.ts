import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ProductservicesService 
{
  constructor(private http: HttpClient) { }

  getAllProducts()
  {
    return this.http.get('http://localhost:2020/server/admin/all_products');
  }

  addProduct(data: any)
  {
    return this.http.post('http://localhost:2020/server/admin/add_product', data);
  }

  removeProduct(productId)
  {
    return this.http.delete(`http://localhost:2020/server/admin/remove_product/${productId}`);
  }

  editProduct(data: any)
  {
    return this.http.put('http://localhost:2020/server/admin/edit_product', data);
  }

}
