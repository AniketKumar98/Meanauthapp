import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../validate.service';
import {AuthService} from 'src/app/auth.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name:String;
  email:String;
  username:String;
  password:String;
  constructor(private ValidateService:ValidateService,
              private flashmessage:FlashMessagesService,
              private authservice:AuthService,
              private router:Router) { }

  ngOnInit() {
  }
  Register(){
    const user ={
      name: this.name,
      email:this.email,
      username:this.username,
     password:this.password
    }
     if(!this.ValidateService.validate(user))
     {
       this.flashmessage.show('Please fill all fields',{cssClass:'alert-danger',timeout:3000});
       return false;
     }
     if(!this.ValidateService.validateemail(user.email))
     {
       this.flashmessage.show('Please fill correct email',{cssClass:'alert-danger',timeout:3000});
       return false;
     }
     try {
      this.authservice.registerUser(user).subscribe(data => {
         // @ts-ignore
        if (data.success) {
          this.flashmessage.show('You are now registered',{cssClass:'alert-success',timeout:3000});
          this.router.navigate(['/login']);
         } else {

           this.flashmessage.show('Cannot Register',{cssClass:'alert-danger',timeout:3000});
          this.router.navigate(['/register']);

         }
       });
     } catch (error) {

     }

  }
}
