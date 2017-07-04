import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class SearchService {

  constructor(private http: Http) { }

  // https://efounbqifq-dsn.algolia.net/1/indexes/Product_v2_en?query=bag
  search(searchString: string) {
console.log(searchString);
    let url = 'https://efounbqifq-dsn.algolia.net/1/indexes/Product_v2_en';

    let params = new URLSearchParams();
    params.set('query', searchString); // the user's search value

    return this.http
            .get(url, { search: params })
            .map(response => <string[]> response.json());
  }
}
