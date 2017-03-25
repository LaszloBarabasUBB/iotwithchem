import {Injectable} from "@angular/core";
import {Http, Response, URLSearchParams} from "@angular/http";
import {Observable} from "rxjs";
import {PhDO} from "../model/ph";

@Injectable()
export class PhService {

  constructor(private http: Http) {
  }

  private baseUrl = 'https://iotwithchembackend.herokuapp.com';

  getPh(): Observable<PhDO> {

    return this.http.get(this.baseUrl + "/getph")
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }


  getPhsInInterval(startDate: number, endDate: number): Observable<PhDO[]> {

    let params: URLSearchParams = new URLSearchParams();
    params.set('datefrom', startDate.toString());
    params.set('dateto', endDate.toString());


    return this.http.get(this.baseUrl + "/getPhinterval", {search: params})
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  setPhValue(phValue: number): Observable<any> {
    let params: URLSearchParams = new URLSearchParams();
    params.set('phvalue', phValue.toString());

    return this.http.get(this.baseUrl + "/setphvalue", {search: params})
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}
