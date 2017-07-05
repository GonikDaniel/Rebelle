import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'rebelle-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() item;

  constructor() { }

  ngOnInit() {
  }

  likeItem() {
    console.log('not implemented yet');
  }

  shareItem() {
    console.log('not implemented yet');
  }


}
