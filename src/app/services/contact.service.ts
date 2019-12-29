import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import contacts from '../data/contacts.json';
import { Contact } from '../contact';
import { UserService } from './user.service';

@Injectable()
export class ContactService {

  public contactList: Contact[];

  constructor(private userService: UserService) {
    this.userService.getLoggedinUser()
      .subscribe(user => {
        if (user.contactList) this.contactList = user.contactList
        else this.contactList = contacts
      })
  }

  getContacts(): Observable<Contact[]> {

    var contactsToReturn = this.contactList;
    this.sort(contactsToReturn);
    return of(contactsToReturn);
  }

  getContactById(id: string): Observable<Contact> {
    const contact = this.contactList.find(contact => contact._id === id)
    return of(contact);
  }
  deleteContact(id: string) {
    return new Promise((resolve, reject) => {
      const index = this.contactList.findIndex(contact => contact._id === id)
      if (index !== -1) {
        this.contactList.splice(index, 1)
      }
      resolve(this.contactList)
    })
  }
  saveContact(contact) {
    return contact._id ? this._updateContact(contact) : this._addContact(contact)
  }

  getEmptyContact() {
    return {
      name: '',
      email: '',
      phone: ''
    }
  }

  sort(arr) {
    return arr.sort((a, b) => {
      if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) {
        return -1;
      }
      if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) {
        return 1;
      }
      return 0;
    })
  }

  filter(term) {
    term = term.toLocaleLowerCase()
    const filteredContacts = this.contactList.filter(contact => {
      return contact.name.toLocaleLowerCase().includes(term) ||
        contact.phone.toLocaleLowerCase().includes(term) ||
        contact.email.toLocaleLowerCase().includes(term)
    })
    return of(filteredContacts)
  }

  _updateContact(contact) {
    return new Promise((resolve, reject) => {
      const index = this.contactList.findIndex(c => contact._id === c._id)
      if (index !== -1) {
        this.contactList[index] = contact
      }
      resolve(contact)
    })
  }
  _addContact(contact) {
    return new Promise((resolve, reject) => {
      contact._id = _makeId()
      this.contactList.push(contact)
      resolve(contact)
    })
  }

}

function _makeId(length = 10) {
  var txt = ''
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  for (var i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length))
  }
  return txt
}