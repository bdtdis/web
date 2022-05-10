import {Component} from "@angular/core";
import {State} from "../shared/state/app.state";
import {Store} from "@ngrx/store";

import * as userActions from '../user/state/user.actions';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../user/user.service";
import {Md5} from "ts-md5/dist/md5";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  scanning = false;

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(4)]),
  });

  invalidCredentials = false;

  constructor(
    private store: Store<State>,
    private userService: UserService) {
  }

  login() {
    this.invalidCredentials = false;
    this.userService.login(
      this.loginForm.get('email')!.value,
      Md5.hashStr(this.loginForm.get('password')!.value)
    ).subscribe(({id}) => {
      this.store.dispatch(userActions.logIn({id}));
    }, () => {
      this.invalidCredentials = true;
    });
  }

  scanQr() {
    this.scanning = true;
  }
}
