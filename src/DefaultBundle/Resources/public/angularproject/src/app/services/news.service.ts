import { Injectable} from '@angular/core';
import { Http, RequestOptions, Headers, Response, RequestMethod} from '@angular/http';

import 'rxjs/add/operator/map';


@Injectable()
export class NewsService{
  constructor(private http: Http){
    console.log('PostsService Initialize.');
  }

  getPosts(){
    var token = localStorage.getItem('id_token');
    let headers = new Headers({ 'Authorization': 'Bearer ' + token});
    let opts = new RequestOptions({
      headers: headers
    });
    return this.http.get('/api/news', {headers: headers})
      .map(res =>res.json());
  }
}
