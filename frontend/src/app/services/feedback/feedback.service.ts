import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class FeedbackService {

  private baseUrl = '';

  private static extractData(res: Response) {
    return res.json();
  }

  private static handleError(error: any) {
    const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

  constructor(private http: Http) {
  }

  sendFeedback(from: string, message: string): Observable<boolean> {
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({headers: headers});

    return this.http.post(this.baseUrl + '/sendFeedback', {'from': from, 'message': message}, options)
      .map(FeedbackService.extractData)
      .catch(FeedbackService.handleError);
  }

}