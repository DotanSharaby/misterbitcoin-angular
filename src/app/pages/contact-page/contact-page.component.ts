import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

  contacts$;
  constructor(private contactService: ContactService, private userService: UserService, private router: Router) {
    this.userService.getLoggedinUser().subscribe(user => {
      if (!user) return this.router.navigate(['/signup']);
    })
  }

  ngOnInit() {
    this.loadContacts();
  }

  loadContacts() {
    this.contacts$ = this.contactService.getContacts();
  }

  displayFilter(val) {
    this.contacts$ = this.contactService.filter(val);
  }

}
