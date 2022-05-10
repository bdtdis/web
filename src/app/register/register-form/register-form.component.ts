import {Component, EventEmitter, Input, Output} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Md5} from 'ts-md5/dist/md5';

@Component({
  selector: 'register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent {
  registerForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(32)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(32)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(4)]),
  });

  @Input() registerButton: { icon: string, text: string };
  @Output() register = new EventEmitter<{ firstName: string, lastName: string, email: string, password: string }>();

  onRegister() {
    this.register.emit({
      firstName: this.registerForm.get('firstName')!.value,
      lastName: this.registerForm.get('lastName')!.value,
      email: this.registerForm.get('email')!.value,
      password: Md5.hashStr(this.registerForm.get('password')!.value),
    });
  }
}
