import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { UserService } from '../../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { User } from '../../user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact-details-page',
  templateUrl: './contact-details-page.component.html',
  styleUrls: ['./contact-details-page.component.scss']
})
export class ContactDetailsPageComponent implements OnInit {
  contact;
  user$: Observable<User>;

  constructor(
    private userService: UserService,
    private contactService: ContactService,
    private activeRoute: ActivatedRoute,
    private location: Location,
    private router: Router
  ) {
    this.user$ = this.userService.getLoggedinUser();
  }

  ngOnInit() {
    const { id } = this.activeRoute.snapshot.params;
    this.contactService.getContactById(id)
      .subscribe(contact => {
        this.contact = contact
        this.contact.imgUrl = `https://robohash.org/${this.contact.name}.png?set=set4`;
      })
  }

  goBack(): void {
    this.location.back();
  }

  transfer(amount) {
    this.user$.subscribe(
      (user) => {
        this.userService.addTransfer(user, this.contact, amount)
        this.router.navigate(['/contacts']);
      }
    )
  }
  transfersToShow(id, user) {
    return user.moves.filter(move => move.toId === id)
  }

}
