import { Component, OnInit } from '@angular/core';
import {AuthService} from 'src/app/auth.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:Object;
  constructor(private authservice:AuthService,private router:Router) {
   }

  ngOnInit() {
    this.user=this.authservice.getProfile();
  }

}
