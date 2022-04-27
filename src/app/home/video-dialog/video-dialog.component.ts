import {Component, Inject} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Video} from "../../shared/models/video.model";
import * as fromUser from "../../user/state/user.selectors";
import {Store} from "@ngrx/store";
import {State} from "../../shared/state/app.state";

@Component({
  selector: 'video-dialog',
  templateUrl: './video-dialog.component.html',
  styleUrls: ['./video-dialog.component.scss']
})
export class VideoDialogComponent {
  uuid$ = this.store.select(fromUser.getUserId);

  constructor(
    public dialogRef: MatDialogRef<VideoDialogComponent>,
    private store: Store<State>,
    @Inject(MAT_DIALOG_DATA) public data: Video) {
  }
}
