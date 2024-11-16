import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BoardService {
  constructor(private http: HttpClient) {}
  private noticeUrl = 'http://localhost:8080/board/notice';
  private qnaUrl = 'http://localhost:8080/board/qna';
  private qnaDetailUrl = 'http://localhost:8080/board';
  private commentUrl = 'http://localhost:8080/comments';

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
