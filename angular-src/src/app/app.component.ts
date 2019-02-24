import { Component } from '@angular/core';
import {AuthService} from 'src/app/auth.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-src';
  token:boolean;
  constructor(private flashmessage:FlashMessagesService,
              private authservice:AuthService,
              private router:Router){

              }
  Logout(){
    this.token=false;
    this.authservice.logout();
    this.flashmessage.show('Logged Out',{cssClass:'alert-success',timeout:500});
    this.router.navigate(['/login']);
    return false;
  }
}
