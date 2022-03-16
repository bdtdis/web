import {Component, EventEmitter, Input, Output} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent {
  registerForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(32)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(32)]),
    email: new FormControl('', [Validators.required, Validators.email])
  });

  @Input() registerButton: { icon: string, text: string };
  @Output() register = new EventEmitter<{ firstName: string, lastName: string, email: string }>();

  onRegister() {
    this.register.emit({
      firstName: this.registerForm.get('firstName')!.value,
      lastName: this.registerForm.get('lastName')!.value,
      email: this.registerForm.get('email')!.value,
    });
  }
}
