import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MemberService } from '../../services/member/member.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private memberService: MemberService, private router: Router) {}

  public email: string = '';
  public password: string = '';

  onClickLoginButton(): void {
    if (this.email === '') {
      alert('이메일 주소를 입력해 주세요.');
      return;
    } else if (this.password === '') {
      alert('비밀번호를 입력해 주세요.');
      return;
    }

    this.memberService
      .postLogin({
        mail: this.email,
        password: this.password,
      })
      .subscribe({
        next: (data) => {
          console.log(data);
          alert('로그인 성공! 환영합니다.');
          this.router.navigateByUrl('/');
          window.scrollTo(0, 0);
        },
        error: (error) => {
          console.log(error.error);
          alert(error.error);
        },
      });
  }

  onClickJoinButton(): void {
    this.router.navigateByUrl(`/join`);
    window.scrollTo(0, 0);
  }
}
