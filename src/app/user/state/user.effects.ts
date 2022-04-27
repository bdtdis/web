import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {map, mergeMap, tap} from 'rxjs/operators';
import * as userActions from './user.actions';
import {Router} from "@angular/router";
import {UserService} from "../user.service";

@Injectable()
export class UserEffects {
  logIn$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userActions.logIn),
      mergeMap(({id}) => this.userService.getUserDetails(id).pipe(
          map((user) => userActions.logInSuccess({user}))
        )
      )
    )
  );

  logInSuccess$ = createEffect(() => this.actions$.pipe(
      ofType(userActions.logInSuccess),
      tap(({user}) => {
        localStorage.setItem('id', user.id);
        this.router.navigate(['/home']);
      }),
    ),
    {dispatch: false},
  );

  logOut$ = createEffect(() => this.actions$.pipe(
      ofType(userActions.logOut),
      tap(() => {
        localStorage.removeItem('id');
        this.router.navigate(['/login']);
      }),
    ),
    {dispatch: false},
  );

  constructor(
    private actions$: Actions,
    private userService: UserService,
    private router: Router
  ) {
  }
}
