import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  users: any[] = [
    {
      id: 1,
      email: 'S@gmail.com',
      password: '123456',
      role: 'user'
    },
    {
      id: 2,
      email: 'admin@gmail.com',
      password: '123456',
      role: 'admin'
    }
  ];

  constructor(private _router: Router) { }
  session: any;
  role;

  login(email: string, password: number) {
    let user = this.users.find(u => u.email === email && u.password === password);
    if (user) {
      this.session = user;
      this.role = user.role;
      localStorage.setItem('Session', JSON.stringify(this.session));
    }
    return user;
  }

  logoutsession() {
    localStorage.removeItem('Session');
  }

  checkRole(menuName: any) {
    if (this.role == 'admin') 
    {
      return true;
    }
    else 
    {
      if (menuName == 'list') 
      {
        return true;
      }
      else 
      {
        return false;
      }
    }
  }
}
