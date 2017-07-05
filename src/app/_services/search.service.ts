import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

// import { AppConfig } from '../app.config';
import { config } from '../config/config.development';

@Injectable()
export class SearchService {

  private _sub;
  constructor(
    private http: Http,
    // private config: AppConfig
  ) { }

  // https://efounbqifq-dsn.algolia.net/1/indexes/Product_v2_en?query=bag
  search(searchString: string) {
    console.log(this._sub);
    const url = `${config['host']}/1/indexes/Product_v2_en`;

    const headers = new Headers();
    headers.append('X-Algolia-API-Key', config['X-Algolia-API-Key']);
    headers.append('X-Algolia-Application-Id', config['X-Algolia-Application-Id']);

    const params = new URLSearchParams();
    params.set('query', searchString); // the user's search value

    const options = new RequestOptions({ headers: headers, params: params });

    this._sub = this.http
      .get(url, options)
      .map(response => response.json())
      .map(res => res.hits)
      .catch(this.handleError);

    return this._sub;
  }

  private handleError(error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }
}
