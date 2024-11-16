import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BoardService {
  constructor(private http: HttpClient) {}
  private noticeUrl = 'http://localhost:8080/board/notice';

  getNotice(): Observable<any> {
    return this.http.get<any>(this.noticeUrl);
  }
}
