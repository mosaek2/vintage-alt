import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MemberService } from '../../services/member/member.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-join',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './join.component.html',
  styleUrl: './join.component.css',
})
export class JoinComponent {
  constructor(private memberService: MemberService, private router: Router) {}

  public email: string = '';
  public password: string = '';
  public passwordCheck: string = '';
  public name: string = '';
  public gender: string = '';
  public solar: string = '';
  public year: string = '';
  public month: string = '';
  public day: string = '';
  public phone1: string = '';
  public phone2: string = '';
  public phone3: string = '';
  public phoneAlt1: string = '';
  public phoneAlt2: string = '';
  public phoneAlt3: string = '';
  public zipcode: string = '';
  public address: string = '';
  public addressDetail: string = '';
  public holder: string = '';
  public bank: string = '';
  public account: string = '';

  public isUniqueEmail: boolean = false;
  public isPasswordMatch: boolean = true;
  public isUniquePhone: boolean = false;

  onClickMailCheck(): void {
    const mailInfo = { mail: this.email };
    this.memberService.postMailCheck(mailInfo).subscribe({
      next: (data) => {
        if (data) {
          this.isUniqueEmail = true;
          alert('사용 가능한 메일 주소입니다.');
        } else {
          alert('이미 사용 중인 메일 주소입니다.');
        }
      },
      error: (error) => {
        console.log(error.error);
      },
      complete: () => {
        console.log('요청 완료');
      },
    });
  }

  onClickPhoneCheck(): void {
    const phone = { phone: `${this.phone1}-${this.phone2}-${this.phone3}` };
    this.memberService.postPhoneCheck(phone).subscribe({
      next: (data) => {
        if (data) {
          this.isUniquePhone = true;
          alert('사용 가능한 휴대전화번호입니다.');
        } else {
          alert('이미 사용 중인 휴대전화번호입니다.');
        }
      },
      error: (error) => {
        console.log(error.error);
      },
      complete: () => {
        console.log('요청 완료');
      },
    });
  }

  onChangeMail(): void {
    this.isUniqueEmail = false;
  }
  onChangePhone(): void {
    this.isUniquePhone = false;
  }

  onPasswordCheckBlur(): void {
    if (this.password !== '') {
      if (this.password === this.passwordCheck) {
        this.isPasswordMatch = true;
      } else {
        this.isPasswordMatch = false;
      }
    } else {
      this.isPasswordMatch = true;
    }
  }
  onPasswordBlur(): void {
    if (this.passwordCheck !== '') {
      if (this.password === this.passwordCheck) {
        this.isPasswordMatch = true;
      } else {
        this.isPasswordMatch = false;
      }
    } else {
      this.isPasswordMatch = true;
    }
  }

  onClickJoinButton(): void {
    if (this.email === '') {
      alert('이메일 주소를 입력해 주세요.');
      return;
    } else if (this.password === '' || this.passwordCheck === '') {
      alert('비밀번호를 입력해 주세요.');
      return;
    } else if (this.name === '') {
      alert('이름을 입력해 주세요.');
      return;
    } else if (this.gender === '') {
      alert('성별을 선택해 주세요.');
      return;
    } else if (
      this.solar === '' ||
      this.year === '' ||
      this.month === '' ||
      this.day === ''
    ) {
      alert('생년월일을 입력해 주세요.');
      return;
    } else if (this.phone1 === '' || this.phone2 === '' || this.phone3 === '') {
      alert('휴대전화번호를 입력해 주세요.');
      return;
    } else if (
      this.zipcode === '' ||
      this.address === '' ||
      this.addressDetail === ''
    ) {
      alert('주소를 입력해 주세요.');
      return;
    } else if (this.isUniqueEmail === false) {
      alert('이메일 중복 확인을 해 주세요.');
      return;
    } else if (this.isPasswordMatch === false) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    } else if (this.isUniquePhone === false) {
      alert('휴대전화번호 중복 확인을 해 주세요.');
      return;
    }

    const birth: Date = new Date(
      parseInt(this.year),
      parseInt(this.month) - 1,
      parseInt(this.day)
    );
    const phone: string = `${this.phone1}-${this.phone2}-${this.phone3}`;
    const phoneAlt: string = `${this.phoneAlt1}-${this.phoneAlt2}-${this.phoneAlt3}`;

    const joinInfo = {
      mail: this.email,
      password: this.password,
      name: this.name,
      gender: this.gender,
      solar: this.solar,
      birth: birth,
      solarYn: this.solar,
      phone: phone,
      phoneAlt: phoneAlt,
      zip: this.zipcode,
      address: this.address,
      addressDetail: this.addressDetail,
      holder: this.holder,
      refundBank: this.bank,
      refundAccount: this.account,
      smsYn: 'y',
      mailYn: 'y',
    };

    this.memberService.postJoin(joinInfo).subscribe({
      next: (data) => {
        console.log(data);
        alert('가입 완료되었습니다. 로그인 페이지로 이동합니다.');
        this.router.navigateByUrl('/login');
        window.scrollTo(0, 0);
      },
      error: (error) => {
        console.log(error.error);
        alert(error.error);
      },
    });
  }
}
