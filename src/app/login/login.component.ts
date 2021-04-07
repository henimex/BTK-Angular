import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../models/user';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model:User = new User();
  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
  }

  login(form:NgForm) {
    this.accountService.login(this.model)
  }

}
