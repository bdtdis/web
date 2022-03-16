import {CanActivate, CanLoad} from "@angular/router";
import {Injectable} from "@angular/core";
import {State} from "./state/app.state";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";

import * as fromUser from '../user/state/user.selectors';
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root',
})
export class IsLoggedOutGuard implements CanActivate, CanLoad {
  constructor(private store: Store<State>) {
  }

  canActivate(): Observable<boolean> {
    return this.store.select(fromUser.isLoggedIn).pipe(map((isLoggedIn => !isLoggedIn)));
  }

  canLoad(): Observable<boolean> {
    return this.canActivate();
  }
}
