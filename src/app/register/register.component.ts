import {Component} from "@angular/core";
import {State} from "../shared/state/app.state";
import {Store} from "@ngrx/store";
import {UserService} from "../user/user.service";
import * as userActions from "../user/state/user.actions";

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(
    private store: Store<State>,
    private userService: UserService
  ) {
  }

  register({firstName, lastName, email, password}: { [key: string]: string }) {
    this.userService.createUser(firstName, lastName, email, password)
      .subscribe({
        next: (user) => {
          this.store.dispatch(userActions.logIn({id: user.id}));
        }
      });
  }
}
