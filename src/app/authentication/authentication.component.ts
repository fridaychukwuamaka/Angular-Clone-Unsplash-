import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
	click = true;
	check = false;
	validate = ''
	emailValid = true;
	passValid = false;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onChange(form: NgForm){
  	if(form.form.value.email !== '' && form.form.value.password === ''){
  		this.check = false;
  		this.validate = 'Passord input is empty*'
  	}
  	if(form.form.value.email === '' && form.form.value.password !== ''){
  		this.check = false;
  		this.validate = 'email input is empty*'
  	}
  	if(form.form.value.email !== '' && form.form.value.password !== ''){
  		this.check = true;
  		this.validate = ''
  	}
  	if(form.form.value.email === '' && form.form.value.password === ''){
  		this.check = false;
  		this.validate = 'Email and Password input are empty*'
  	}
  }

onLogin(){
  this.click = !this.click
  console.log(this.click)
}

onSubmitLogin(form: NgForm){
  if(this.check == true){
  this.router.navigate(['/'], {relativeTo: this.route})
}

}

onSubmitSignup(form: NgForm){
  if(this.check == true){
    this.router.navigate(['/'], {relativeTo: this.route})
  }
}

}
