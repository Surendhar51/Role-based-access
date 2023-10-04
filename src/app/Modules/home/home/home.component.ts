import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/core/Service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private _service: AuthService,
    private _router: Router,
    private _toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }

  logout() {
    this._service.logoutsession();
    this._toastr.success("Logged out");
    this._router.navigate(['auth']);
  }
}
