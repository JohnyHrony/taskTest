import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AddNewsService {
  public token: string;

  constructor(private http:Http) {
    console.log('AddNewsService Initialize...');
  }

  addPost(addPost: Object) {
    let token = localStorage.getItem('id_token');
    let body = "title="+addPost['title']+"&body="+addPost['body'];
    let headers = new Headers({ 'Authorization': 'Bearer ' + token});
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let options = new RequestOptions({ headers: headers, method: "post" });

    return this.http.post('/api/createnews/', body, options).map((res: Response) => res.json());
  }
}
