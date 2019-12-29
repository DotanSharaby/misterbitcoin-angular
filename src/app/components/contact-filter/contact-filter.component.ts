import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contact-filter',
  templateUrl: './contact-filter.component.html',
  styleUrls: ['./contact-filter.component.scss']
})
export class ContactFilterComponent implements OnInit {

  @Output() filterContacts = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onFilter(value: string) {
    this.filterContacts.emit(value);
  }

}
