import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AdminservicesService 
{
  constructor(private http: HttpClient) { }

  getAllUsers()
  {
    return this.http.get('http://localhost:2020/server/admin/all_users');
  }

  addUser(data: any)
  {
    return this.http.post('http://localhost:2020/server/admin/add_user', data);
  }

  removeUser(data: any)
  {
    return this.http.delete(`http://localhost:2020/server/admin/remove_user/${data}`);
  }

  updateUser(data: any)
  {
    return this.http.put('http://localhost:2020/server/admin/update_user', data);
  }
}
