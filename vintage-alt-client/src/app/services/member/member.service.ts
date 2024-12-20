import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MemberService {
  private apiUrl = environment.apiUrl;

  private joinUrl = `${this.apiUrl}/join`;
  private loginUrl = `${this.apiUrl}/login/request`;

  constructor(private http: HttpClient) {}

  postJoin(joinInfo: {
    mail: string;
    password: string;
    name: string;
    gender: string;
    birth: Date;
    solarYn: string;
    phone: string;
    phoneAlt: string;
    zip: string;
    address: string;
    addressDetail: string;
    holder: string;
    refundBank: string;
    refundAccount: string;
    mailYn: string;
    smsYn: string;
  }): Observable<string> {
    return this.http.post(`${this.joinUrl}/request`, joinInfo, {
      responseType: 'text',
    });
  }

  postMailCheck(mailAddress: { mail: string }): Observable<any> {
    return this.http.post(`${this.joinUrl}/mailCheck`, mailAddress, {
      responseType: 'text',
    });
  }

  postPhoneCheck(phone: { phone: string }): Observable<any> {
    return this.http.post(`${this.joinUrl}/phoneCheck`, phone);
  }

  postLogin(loginInfo: { mail: string; password: string }): Observable<any> {
    return this.http.post(this.loginUrl, loginInfo, {
      withCredentials: true,
      responseType: 'text',
    });
  }
}
