import {Component} from "@angular/core";
import {State} from "../shared/state/app.state";
import {Store} from "@ngrx/store";

import * as userActions from '../user/state/user.actions';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  scanning = false;

  constructor(
    private store: Store<State>) {
  }

  onQrCodeRead(event: any) {
    this.store.dispatch(userActions.logIn({id: event}));
  }

  scanQr() {
    this.scanning = true;
  }
}
