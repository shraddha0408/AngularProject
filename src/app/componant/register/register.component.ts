import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ServiceService} from 'src/app/services/service.service';
import { Router } from '@angular/router';
/** 
 * 
 * @param form
*/
function  passwordMatchValidator(form){
  const password = form.get('password')
  const confirmpassword = form.get('confirmpassword')

  if(password.value !== confirmpassword.value){
    confirmpassword.setErrors({ passwordsMatch: true})
  } else{
    confirmpassword.setErrors(null)
  }
  return null 
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup

  constructor(private apiService:ServiceService,private router:Router) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      name: new FormControl('',Validators.required),
      username: new FormControl('',Validators.required),
      email: new FormControl('',[Validators.required,Validators.email]),
      mobileno: new FormControl('',Validators.required),
      password: new FormControl('',[Validators.required, Validators.minLength(8)]),
      confirmpassword: new FormControl('')
  
      

    },
    {
      validators: passwordMatchValidator

  })
  }

  register()
  {
    console.log(this.registerForm.value)

    this.apiService.createUser(this.registerForm .value)
    .subscribe( data => {
      this.router.navigate(['view']);
    });


  }

}
