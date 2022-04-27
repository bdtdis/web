import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavItemComponent} from "./shared/nav-item/nav-item.component";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {HomeComponent} from "./home/home.component";
import {StoreModule} from "@ngrx/store";
import {reducers} from "./shared/state/app.reducers";
import {ZXingScannerModule} from "@zxing/ngx-scanner";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {EffectsModule} from "@ngrx/effects";
import {UserEffects} from "./user/state/user.effects";
import {CbuttonComponent} from "./shared/cbutton/cbutton.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {UserIdInterceptor} from "./shared/user-id.interceptor";
import {RegisterFormComponent} from "./register/register-form/register-form.component";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {LoadingInterceptor} from "./shared/loading/loading.interceptor";
import {NotificationsEffects} from "./shared/notifications/state/notifications.effects";
import {VideoDialogComponent} from "./home/video-dialog/video-dialog.component";

@NgModule({
  declarations: [
    AppComponent,
    NavItemComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    CbuttonComponent,
    RegisterFormComponent,
    VideoDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([UserEffects, NotificationsEffects]),
    ZXingScannerModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    FormsModule,
    MatProgressBarModule,
    MatIconModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UserIdInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
