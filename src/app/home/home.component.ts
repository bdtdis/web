import {Component, OnDestroy} from "@angular/core";
import {Store} from "@ngrx/store";
import {State} from "../shared/state/app.state";
import * as fromUser from "../user/state/user.selectors";
import {MatDialog} from "@angular/material/dialog";
import {takeUntil, tap} from "rxjs/operators";
import {Subject} from "rxjs";
import {UserService} from "../user/user.service";
import {NotificationsService} from "../shared/notifications/notifications.service";
import {NotificationType} from "../shared/notifications/state/notifications.state";
import {Video} from "../shared/models/video.model";
import {VideoService} from "./video.service";
import {VideoDialogComponent} from "./video-dialog/video-dialog.component";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnDestroy {
  userDetails$ = this.store.select(fromUser.getUserDetails);
  userDetails: { firstName: string, lastName: string, banned: boolean };

  categories = ['animals', 'nature'];
  videos: Video[] = [];

  destroyed$ = new Subject();

  constructor(
    private store: Store<State>,
    private dialog: MatDialog,
    private userService: UserService,
    private notificationsService: NotificationsService,
    private videoService: VideoService,
  ) {
    this.loadUserDetails();
    this.loadVideos();
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  private loadVideos() {
    this.videoService.getVideos().subscribe((videos) => {
      this.videos = videos;
    });
  }

  private loadUserDetails() {
    this.userDetails$.pipe(
      takeUntil(this.destroyed$),
      tap((user) => {
        this.userDetails = {...user};
      }),
    ).subscribe({
      error: () => this.notificationsService.addNotification('There was a problem trying to load user data.', NotificationType.ERROR),
    });
  }

  public getVideosByCategory(category: string): Video[] {
    return this.videos.filter((v) => v.category === category);
  }

  public playVideo(video: Video): void {
    this.dialog.open(VideoDialogComponent, {
      width: '700px',
      height: '500px',
      panelClass: 'no-padding',
      data: video,
    });
  }
}
