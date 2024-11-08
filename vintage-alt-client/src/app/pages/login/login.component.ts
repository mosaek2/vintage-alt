import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  public email: string = '';
  public password: string = '';

  onClickLoginButton(): void {
    if (this.email === '') {
      alert('이메일 주소를 입력해 주세요.');
    } else if (this.password === '') {
      alert('비밀번호를 입력해 주세요.');
    }
  }
}
