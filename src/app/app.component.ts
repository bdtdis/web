import {Component} from '@angular/core';
import {Tab} from "./shared/tabs.enum";
import {NavigationEnd, Router} from "@angular/router";
import {State} from "./shared/state/app.state";
import {Store} from "@ngrx/store";
import * as fromUser from "./user/state/user.selectors";
import * as fromNotifications from "./shared/notifications/state/notifications.selectors";
import * as userActions from "./user/state/user.actions";
import {LoadingService} from "./shared/loading/loading.service";
import {NotificationType} from './shared/notifications/state/notifications.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  Tabs = Tab;
  NotificationType = NotificationType;

  logo = '../assets/logo.png';
  selected: Tab = Tab.HOME;

  isLoggedIn$ = this.store.select(fromUser.isLoggedIn);
  userDetails$ = this.store.select(fromUser.getUserDetails);

  notifications$ = this.store.select(fromNotifications.getNotifications);

  constructor(
    private router: Router,
    private store: Store<State>,
    public loadingService: LoadingService
  ) {
    this.handleSession();
    this.handleSelectedTab();
  }

  public isSelected(tab: Tab) {
    return this.selected === tab;
  }

  public logout() {
    this.store.dispatch(userActions.logOut());
  }

  private handleSession() {
    const id = localStorage.getItem('id');
    if (id) {
      this.store.dispatch(userActions.logIn({id}));
    }
  }

  private handleSelectedTab() {
    this.router.events.subscribe((navigationEvent) => {
      if (navigationEvent instanceof NavigationEnd) {
        this.selected = navigationEvent.url.substr(1) as Tab;
      }
    })
  }
}
