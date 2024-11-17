import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BoardService {
  constructor(private http: HttpClient) {}
  private apiUrl = environment.apiUrl;

  private noticeUrl = `${this.apiUrl}/board/notice`;
  private qnaUrl = `${this.apiUrl}/board/qna`;
  private qnaDetailUrl = `${this.apiUrl}/board`;
  private commentUrl = `${this.apiUrl}/comments`;

  getNotice(): Observable<any> {
    return this.http.get<any>(this.noticeUrl);
  }
  getQna(): Observable<any> {
    return this.http.get<any>(this.qnaUrl);
  }
  getQnaDetail(uid: string): Observable<any> {
    return this.http.get<any>(this.qnaDetailUrl, { params: { uid } });
  }
  getQnaComments(uid: string): Observable<any[]> {
    return this.http.get<any[]>(this.commentUrl, { params: { uid } });
  }
}
