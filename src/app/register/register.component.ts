import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  username: string = '';
  password: string = '';
  login: string = 'Login';
  goals = ["Create cloud resources on any cloud.","Create Basic Networking environment.","Migrate from one cloud to another with ease."]
  constructor() { }

  ngOnInit() {
  }

  addItem() {
    console.log(this.username);
  }

}
