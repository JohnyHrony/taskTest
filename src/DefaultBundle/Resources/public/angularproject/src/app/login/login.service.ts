import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';

@Injectable()
export class LoginService
{
  public token: string;
  constructor(private http: Http) {
  }

  auth(loginData: Object) {

    let body = "_username="+loginData['username']+"&_password="+loginData['password'];
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let options = new RequestOptions({ headers: headers, method: "post" });

    return this.http.post('/api/login_check', body, options).map((res: Response) => res.json());
  }
}
