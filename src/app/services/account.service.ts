import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { AlertifyService } from './alertify.service';

@Injectable()
export class AccountService {
  constructor(private alertifyService:AlertifyService) {}

  loggedIn = false;
  login(user: User): boolean {
    if (user.userName == 'henimex' && user.password == '12345') {
      this.loggedIn = true;
      localStorage.setItem('isLogged', user.userName);
      this.alertifyService.success("Giriş Başarılı Hoşgeldin "+ user.userName)
      return true;
    }
    this.alertifyService.error("Hatalı Kullanıcı Adı Yada Şifre ")
    return false;
  }

  isLoggedIn() {
    return this.loggedIn;
  }

  logout() {
    localStorage.removeItem('isLogged');
    this.loggedIn = false;
  }
}
