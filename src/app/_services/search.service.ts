import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';

import 'rxjs/add/operator/map';

// import { AppConfig } from '../app.config';
import { config } from '../config/config.development';

@Injectable()
export class SearchService {

  constructor(
    private http: Http,
    // private config: AppConfig
  ) { }

  // https://efounbqifq-dsn.algolia.net/1/indexes/Product_v2_en?query=bag
  search(searchString: string) {
    const url = `${config['host']}/1/indexes/Product_v2_en`;

    const headers = new Headers();
    headers.append('X-Algolia-API-Key', config['X-Algolia-API-Key']);
    headers.append('X-Algolia-Application-Id', config['X-Algolia-Application-Id']);

    const params = new URLSearchParams();
    params.set('query', searchString); // the user's search value

    const options = new RequestOptions({ headers: headers, params: params });

    return this.http
            .get(url, options)
            .map(response => <string[]> response.json());
  }
}
