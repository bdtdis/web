import {Component, HostBinding, Input} from "@angular/core";

@Component({
  selector: 'cbutton',
  templateUrl: './cbutton.component.html',
  styleUrls: ['./cbutton.component.scss']
})
export class CbuttonComponent {
  @Input() icon: string;
  @Input() text: string;
  @Input() @HostBinding('class.disabled') disabled: boolean = false;
}
