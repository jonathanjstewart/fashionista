import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserservicesService } from 'src/app/services/userservices/userservices.service';

@Component({
  selector: 'app-logincomp',
  templateUrl: './logincomp.component.html',
  styleUrls: ['./logincomp.component.css']
})

export class LogincompComponent implements OnInit 
{
  form1: FormGroup;
  errors: string = ''; // error only prints out to console at the moment

  constructor(private router: Router, private userservice: UserservicesService, protected formbuilder: FormBuilder) { }

  ngOnInit(): void 
  {
    this.form1 = this.formbuilder.group({
        name: this.formbuilder.control(''),
        pw: this.formbuilder.control('')
    });
  }

 login()
 {
   var loginCredentials = this.form1.value;

   this.userservice.login(loginCredentials).subscribe((result:any) => {
     this.userservice.$user.next(result);

     if(result.role === 'user')
     {
       this.router.navigate(['/','menu']); 
     }
     else
     {
       this.router.navigate(['/','admin']); //change to admin portal
     }},
     error => {
       console.log('Invalid Username or Password');
       this.errors = error;
      })
  }
  
  alertfunc()
  {
      alert("Login not found, please try again");
  }

}
