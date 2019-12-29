import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-moves-list',
  templateUrl: './moves-list.component.html',
  styleUrls: ['./moves-list.component.scss']
})
export class MovesListComponent implements OnInit {

  @Input() transfers
  constructor() { }

  ngOnInit() {
  }

}
