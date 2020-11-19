import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserservicesService 
{
  constructor(private http: HttpClient) { }

  public $user : BehaviorSubject<string> = new BehaviorSubject<string>(null);
  
  login(user)
  {
    return this.http.post('http://localhost:2020/server/users/login', user);
  }

  register(user)
  {
    return this.http.post('http://localhost:2020/server/users/register', user);
  }
}
