import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  private apiUrl = environment.apiUrl;

  private itemsUrl = `${this.apiUrl}/items`;
  private newUrl = `${this.apiUrl}/items/new`;
  private saleUrl = `${this.apiUrl}/items/sale`;
  private itemUrl = `${this.apiUrl}/item`;

  constructor(private http: HttpClient) {}

  getItems(c1: string, c2: string, c3: string, sort: string): Observable<any> {
    return this.http.get<any>(this.itemsUrl, { params: { c1, c2, c3, sort } });
  }

  getNew(): Observable<any> {
    return this.http.get<any>(this.newUrl);
  }

  getSale(): Observable<any> {
    return this.http.get<any>(this.saleUrl);
  }

  getItem(uid: string): Observable<any> {
    return this.http.get<any>(this.itemUrl, { params: { uid } });
  }
}
