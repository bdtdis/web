import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class UserIdInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const withUserId = req.clone({
      setHeaders: {
        Authorization: `Basic ${localStorage.getItem('id') ?? 0}`
      }
    });
    return next.handle(withUserId);
  }
}
