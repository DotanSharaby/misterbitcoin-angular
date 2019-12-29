import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { UserService } from '../../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-contact-edit-page',
  templateUrl: './contact-edit-page.component.html',
  styleUrls: ['./contact-edit-page.component.scss']
})
export class ContactEditPageComponent implements OnInit {

  contactToEdit = null;
  user;

  constructor(
    private userService: UserService,
    private contactService: ContactService,
    private activeRoute: ActivatedRoute,
    private location: Location,
    private router: Router
  ) {
    this.userService.getLoggedinUser()
      .subscribe(user => {
        this.user = user
      })
  }

  ngOnInit(): void {
    const { id } = this.activeRoute.snapshot.params;
    if (id) {
      this.contactService.getContactById(id)
        .subscribe(contact => {
          this.contactToEdit = contact
        })
    } else {
      this.contactToEdit = this.contactService.getEmptyContact();
    }
  }

  goBack(): void {
    this.location.back();
  }

  saveContact(): void {
    this.contactService.saveContact(this.contactToEdit);
    this.user.contactList = this.contactService.contactList;
    this.userService.updateUser(this.user);
    this.router.navigate(['/contacts']);
  }

  removeContact(): void {
    this.contactService.deleteContact(this.contactToEdit._id);
    this.user.contactList = this.contactService.contactList
    this.userService.updateUser(this.user);
    this.router.navigate(['/contacts']);
  }

}
