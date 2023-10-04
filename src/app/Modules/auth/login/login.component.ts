import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/core/Service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userForm: FormGroup;
  submitted: any = false;

  constructor(
    private _fb: FormBuilder,
    private _authService: AuthService,
    private _router: Router,
    private _toastr: ToastrService
  ) { }

  ngOnInit() {
    this.userForm = this._fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  get f() { return this.userForm.controls; }

  OnSave() {
    this.submitted = true;
    if (this.userForm.invalid) {
      return;
    }

    if (this.userForm.valid) {
      let user = this._authService.login(
        this.userForm.value.email,
        this.userForm.value.password,
      );

      if (!user) {
        this._toastr.error("Invalid email or password");
      }
      else {
        this._toastr.success("Welcome");
        this._router.navigate(['home']);
      }
    }

  }
}
