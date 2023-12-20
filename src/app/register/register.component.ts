import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  errorFromSignUp: string = '';
  isLoading :boolean = false
  registerForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(100)]),
    phone: new FormControl(null, [Validators.required, Validators.minLength(11) , Validators.maxLength(11) , Validators.pattern('[- +()0-9]{10,12}')]),
    email: new FormControl(null,[Validators.required, Validators.email]),
    password: new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{3,8}$/)]),
    rePassword: new FormControl(null,[Validators.required ] )

  }
  
  )

  

  constructor(private _authService: AuthService, private _router: Router) { }

  passcode:string = ""
  rePasscode:string = ""

  ngOnInit(): void {
    
  }


  registerUser(form:FormGroup) {
    if (form.valid && this.passcode == this.rePasscode) {
      this.isLoading = true
      console.log(form.value)
      this._authService.signUp(form.value).subscribe({
        next: (data: any) => {
          if (data.message == "success") {
            // TODO: go to login
            this.isLoading = false
            this._router.navigate(['/login']);

          } else {
            this.errorFromSignUp= data.message
          }
        }

      })
    }


  }

} 

/*
Api shap
{
    "name": "Ahmed Abd Al-Muti",
    "email":"ahmedmutti@gmail.com",
    "password":"Ahmed@123",
    "rePassword":"Ahmed@123",
    "phone":"01010700700"
}
*/

/*
form data shap
{
age: 20
email: "ggg1@gmail.com"
first_name: "Mohamed"
last_name: "Mohamed"
password: "Aaa123"
}
*/
