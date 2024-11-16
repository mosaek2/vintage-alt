import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  private itemsUrl = 'http://localhost:8080/items';
  private newUrl = 'http://localhost:8080/items/new';
  private saleUrl = 'http://localhost:8080/items/sale';
  private itemUrl = 'http://localhost:8080/item';

  constructor(private http: HttpClient) {}

  getItems(c1: string, c2: string, c3: string, sort: string): Observable<any> {
    return this.http.get<any>(this.itemsUrl, {
      params: { c1, c2, c3, sort },
    });
  }

  getNew(): Observable<any> {
    return this.http.get<any>(this.newUrl);
  }

  getSale(): Observable<any> {
    return this.http.get<any>(this.saleUrl);
  }

  getItem(uid: string): Observable<any> {
    return this.http.get<any>(this.itemUrl, {
      params: { uid },
    });
  }
}
