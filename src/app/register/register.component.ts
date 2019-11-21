import { Component, OnInit } from '@angular/core';

import {FormBuilder, FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

submit = false;
registerForm:FormGroup; 

  constructor(private formBuilder:FormBuilder){}
  
  ngOnInit(){
    this.registerForm=this.formBuilder.group({
      username :['', Validators.required],
      email :['', [Validators.required,Validators.email]],
      password :['',[Validators.required,Validators.minLength(6)]],
     confirm :['', Validators.required],
     address :'',
     city:'',
     country :''
     
    })
  }

  get field() {
    return this.registerForm.controls
  }

  onSubmit() {
    this.submit = true;
    console.log("Hello")

    if(this.registerForm.valid){
      alert('SUCCESS!!');
    }
    else{
      return;
    }
      
     console.log("hiii")
    console.log("data => " + this.registerForm.value)
    
  
  }

  onReset() {
    this.submit = false;
    this.registerForm.reset();
  }
    
}
