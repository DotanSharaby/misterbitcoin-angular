import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements OnInit {

  user: User;
  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit() {
  }

  signup(username) {
    this.userService.signup(username)
    this.router.navigate(['/']);
  }

}
