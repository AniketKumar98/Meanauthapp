import { Component, OnInit } from '@angular/core';
import {AuthService} from 'src/app/auth.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:Object;
  constructor(private authservice:AuthService) { }

  ngOnInit() {
    this.user=this.authservice.getProfile();
  }

}
