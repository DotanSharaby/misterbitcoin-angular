import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../user';

@Component({
  selector: 'app-transfer-fund',
  templateUrl: './transfer-fund.component.html',
  styleUrls: ['./transfer-fund.component.scss']
})
export class TransferFundComponent implements OnInit {

  @Input()
  user: User;
  @Input()
  contactName;
  @Output() transfer = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onTransfer(amount) {
    this.transfer.emit(amount)
  }

}
