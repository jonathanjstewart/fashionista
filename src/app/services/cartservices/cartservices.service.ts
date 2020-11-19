import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class CartservicesService 
{

  constructor(private http: HttpClient) { }

  retrieveCart()
  {
    return this.http.get('http://localhost:2020/server/users/retrieve_cart');
  }

  addToCart(data: any)
  {
    return this.http.post('http://localhost:2020/server/users/add_cart', data);
  }

  removeFromCart(productId)
  {
    return this.http.delete(`http://localhost:2020/server/users/remove_cart/${productId}`);
  }

  editCart(data: any)
  {
    return this.http.put('http://localhost:2020/server/users/edit_cart', data);
  }

  // todo: wishlist
}
