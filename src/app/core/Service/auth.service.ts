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
      password: '123456'
    },
    {
      id: 2,
      email: 'admin@gmail.com',
      password: '123456'
    }
  ];

  constructor(private _router:Router) { }
  session: any;

  login(email: string, password: number) {
    let user = this.users.find(u => u.email === email && u.password === password);
    if (user) {
      this.session = user;
      localStorage.setItem('Session', JSON.stringify(this.session));
    }
    return user;
  }

  logoutsession(){
    localStorage.removeItem('Session');
    this._router.navigateByUrl('/login');
  }
}
