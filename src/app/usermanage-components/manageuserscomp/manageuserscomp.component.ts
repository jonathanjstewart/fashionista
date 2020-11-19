import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { userModel } from 'src/app/models/usermodel';
import { AdminservicesService } from 'src/app/services/adminservices/adminservices.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-manageuserscomp',
  templateUrl: './manageuserscomp.component.html',
  styleUrls: ['./manageuserscomp.component.css']
})
export class ManageuserscompComponent implements OnInit 
{
  userForm: FormGroup;
  userForm1: FormGroup;

  users: Array<userModel> = [];

  updatedUser: userModel = null;

  @Input() user_dis: userModel = null;
  @Output() newuser = new EventEmitter<userModel>();

  constructor(private formBuilder: FormBuilder, private router: Router, private userService: AdminservicesService) { }

  ngOnInit(): void 
  {
    this.userLoad();

    this.userForm = this.formBuilder.group({
      name: this.formBuilder.control(''),
      pw: this.formBuilder.control(''),
      role: this.formBuilder.control(''),
    })

    this.userForm1 = this.formBuilder.group({
      name: this.formBuilder.control(''),
      pw: this.formBuilder.control(''),
      role: this.formBuilder.control(''),
    })
  }

  createUser()
  {
    var userInfo = this.userForm1.value;
    this.userService.addUser(userInfo).subscribe((result: any) => {
      this.newuser.emit(result);
      this.userLoad();

    })
  }

  ngOnChanges(): void 
  {
    if (this.user_dis !== null) 
    {
      this.users.push(this.user_dis);
    }
  }

  delete(id: string) 
  {
    this.userService.removeUser(id).toPromise().then((result: any) => this.userLoad());
  }

  userLoad() 
  {
    this.userService.getAllUsers().toPromise().then((res: Array<userModel>) => {
      this.users = res;
    });

  }
  
  updateUser()
  {
    var values = this.userForm.value;
    this.userService.updateUser(values).toPromise().then(() => {
      const index = this.users.findIndex(
        index => index._id === values._id);
      this.users[index] = values;
    })

  }

  fillUpdateForm(user)
  {
    this.updatedUser = user;

    this.userForm = this.formBuilder.group({
      name: this.formBuilder.control(user.name),
      pw: this.formBuilder.control(user.pw),
      role: this.formBuilder.control(user.role),
      _id: this.updatedUser._id
    })
  }


}
