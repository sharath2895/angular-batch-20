import { Component } from '@angular/core';

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.scss']
})
export class LeftNavComponent {

  title: any;
  name: any;
  user: any;
  errorMessage: any;
  isBoolean: any;
  isUser = 'sharath';
  isShow: any;

  constructor() {
    this.title = "this is title of the page";

  }

  getUserName(event: any) {
    if (event.target.value == 'submit') {
      console.log(event)
      console.log(this.user)
      if (this.user == 'sharath') {
        // window.alert("you are logged in successfully")
        this.isBoolean = true

      }
      else {
        // window.alert("the credentials you entered are incorrect")
        this.isBoolean = false
      }
    }
  }

  foucusinevent(event: any) {
    console.log(event)
    console.log(event.target.value)
  }

  showDiv() {
    this.isShow = true
  }


  hideDiv() {
    this.isShow = false;
  }



}
