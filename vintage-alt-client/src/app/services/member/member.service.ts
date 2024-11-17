import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MemberService {
  private joinUrl = 'http://localhost:8080/join';

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
}
