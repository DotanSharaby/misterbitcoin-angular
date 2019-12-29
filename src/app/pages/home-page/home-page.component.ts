import { Component, OnInit } from '@angular/core';

import { BitCoinService } from '../../services/bitCoin.service';
import { UserService } from '../../services/user.service';
import { User } from '../../user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  rate$;
  user$: Observable<User>;
  constructor(private bitCoinService: BitCoinService, private userService: UserService) {
    this.user$ = this.userService.getLoggedinUser()
  }

  ngOnInit() {
    this.rate$ = this.bitCoinService.getRate();
  }
}
