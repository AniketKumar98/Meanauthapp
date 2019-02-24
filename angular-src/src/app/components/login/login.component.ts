import { Component, OnInit } from '@angular/core';
import {AuthService} from 'src/app/auth.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
import {AppComponent} from '../../app.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: String;
  password: String;
  constructor(private authService: AuthService,
              private router: Router,
              private flashMessage: FlashMessagesService,private appc:AppComponent
              ) { }

  ngOnInit() {
  }
  onLoginSubmit() {
     const user = {
       username: this.username,
       password: this.password
    };

    this.authService.authenticateUser(user).subscribe(data => {
      if(data.success){
         this.authService.storeUserData(data.token,data.user);
        this.appc.token=true;
         this.flashMessage.show('LoggedIn',{cssClass:'alert-success',timeout:500});
         this.router.navigate(['/profile']);
      }
      else{
        this.flashMessage.show(data.msg,{cssClass:'alert-danger',timeout:2000});
        this.router.navigate(['/login']);
      }
    });
  }
}
