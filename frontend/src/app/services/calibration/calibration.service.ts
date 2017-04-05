import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Headers, Http, RequestOptions, Response} from '@angular/http';


@Injectable()
export class CalibrationService {

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

  calibratePhSensor(level: string): Observable<boolean> {
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({headers: headers});

    return this.http.post(this.baseUrl + '/calibratePhSensor', {'level': level}, options)
      .map(CalibrationService.extractData)
      .catch(CalibrationService.handleError);
  }

}