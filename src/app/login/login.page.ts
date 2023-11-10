import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  
  
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private alertController: AlertController
  ) { 
    this.loginForm = this.formBuilder.group({
      login: [
        '',
        Validators.compose([
          Validators.required,
          Validators.maxLength(30),
        ]),
      ],
      password: [
        '',
        Validators.compose([Validators.required]),
      ],
    });
  }

  ngOnInit() {
  }

  async onClickLogin(){
    console.log(this.loginForm.value)
    const { login, password } = this.loginForm.value
    if(login=="mobile" && password=="prova2"){
      this.router.navigateByUrl("/calc")
    }else{
      const alert = await this.alertController.create({
        header: 'Atenção',
        message: 'Usuario invalido',
        buttons: ['Ok'],
      });
  
      await alert.present();

    }


  }

}
