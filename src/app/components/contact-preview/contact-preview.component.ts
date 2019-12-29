import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contact-preview',
  templateUrl: './contact-preview.component.html',
  styleUrls: ['./contact-preview.component.scss']
})
export class ContactPreviewComponent implements OnInit {

  @Input() contact;
  name: string;
  phone: string;
  email: string;
  constructor() { }

  ngOnInit() {
    if (!this.contact.imgUrl) this.contact.imgUrl = `https://robohash.org/${this.contact.name}.png?set=set4`
  }
}
