import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'rebelle-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() onSearch = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  search(searchString) {
    console.log(searchString);
    this.onSearch.emit(searchString);
  }

}
