import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class ApiGatewayService {
  private apiUrl = 'https://bdtdis-server.herokuapp.com/';

  constructor(private http: HttpClient) {
  }

  public get<T>(url: string): Observable<T> {
    return this.http.get<T>(this.apiUrl + url);
  }

  public post<T>(url: string, body: Object): Observable<T> {
    return this.http.post<T>(this.apiUrl + url, body);
  }
}
