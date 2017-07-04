import { Component } from '@angular/core';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public items: Observable<string[]>;
  private searchTermStream = new Subject<string>();

  constructor(
    private searchService: SearchService
  ) { }

  ngOnInit() {
    this.items = this.searchTermStream
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap((search: string) => this.searchService.search(search));
  }

  search(searchString: string) {
    this.searchTermStream.next(search);
  }
}
