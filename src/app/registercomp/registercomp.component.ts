import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserservicesService } from 'src/app/services/userservices/userservices.service';

@Component({
  selector: 'app-registercomp',
  templateUrl: './registercomp.component.html',
  styleUrls: ['./registercomp.component.css']
})

export class RegistercompComponent implements OnInit 
{
  form1: FormGroup;

  constructor(private router: Router, private userservice: UserservicesService, protected formbuilder: FormBuilder) { }

  ngOnInit(): void 
  {
    this.form1 = this.formbuilder.group({
        name: this.formbuilder.control(''),
        pw: this.formbuilder.control(''),
        role: this.formbuilder.control('user') // default new user role to non-admim
    });
  }
 
  register()
  {
    var userCredentials = this.form1.value;

    this.userservice.register(userCredentials).subscribe((result) => {
       this.router.navigate(['/','menu']); 
    })
  }
}
