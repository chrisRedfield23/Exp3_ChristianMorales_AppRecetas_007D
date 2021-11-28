import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  constructor() { }

  recuperar = {
    password:''
  }
  ngOnInit() {
  }

  onSubmit(){

    console.log('submit');
    console.log(this.recuperar);

  }


}
