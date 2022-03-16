import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {delay, map, mergeMap, tap} from 'rxjs/operators';
import * as notificationsActions from './notifications.actions';
import {Router} from "@angular/router";

@Injectable()
export class NotificationsEffects {
  addNotification$ = createEffect(() =>
    this.actions$.pipe(
      ofType(notificationsActions.pushNotification),
      delay(2000),
      map(() => notificationsActions.popNotification())
    )
  );

  constructor(
    private actions$: Actions,
    private router: Router
  ) {
  }
}
