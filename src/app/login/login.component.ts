import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  errorFromLogin: string = ''
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
  })

  constructor(private _authService: AuthService, private _router: Router) { }

  ngOnInit(): void {
  }

  loginUser(form: FormGroup) {
    if (form.valid) {
      this._authService.signIn(form.value).subscribe({
        next: (data: any) => {
          if (data.message == 'success') {
            // TODO: go to login
            localStorage.setItem("token", data.token);
            this._authService.savedUser()
            this._router.navigate(['/'])
          } else {
            this.errorFromLogin = data.message
          }
        }

      })
    }


  }

}
