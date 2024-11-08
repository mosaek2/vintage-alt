import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-join',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './join.component.html',
  styleUrl: './join.component.css',
})
export class JoinComponent {
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
    } else if (this.password === '' || this.passwordCheck === '') {
      alert('비밀번호를 입력해 주세요.');
    } else if (this.name === '') {
      alert('이름을 입력해 주세요.');
    } else if (this.gender === '') {
      alert('성별을 선택해 주세요.');
    } else if (
      this.solar === '' ||
      this.year === '' ||
      this.month === '' ||
      this.day === ''
    ) {
      alert('생년월일을 입력해 주세요.');
    } else if (this.phone1 === '' || this.phone2 === '' || this.phone3 === '') {
      alert('휴대전화번호를 입력해 주세요.');
    } else if (
      this.zipcode === '' ||
      this.address === '' ||
      this.addressDetail === ''
    ) {
      alert('주소를 입력해 주세요.');
    } else if (this.isUniqueEmail === false) {
      alert('이메일 중복 확인을 해 주세요.');
    } else if (this.isPasswordMatch === false) {
      alert('비밀번호가 일치하지 않습니다.');
    } else if (this.isUniquePhone) {
      alert('휴대전화번호 중복 확인을 해 주세요.');
    }
  }
}
