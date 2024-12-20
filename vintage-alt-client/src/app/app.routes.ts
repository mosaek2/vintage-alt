import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { JoinComponent } from './pages/join/join.component';
import { LoginComponent } from './pages/login/login.component';
import { NoticeComponent } from './pages/notice/notice.component';
import { QnaDetailComponent } from './pages/qna-detail/qna-detail.component';
import { QnaComponent } from './pages/qna/qna.component';
import { ShopDetailComponent } from './pages/shop-detail/shop-detail.component';
import { ShopComponent } from './pages/shop/shop.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'join', component: JoinComponent },
  { path: 'login', component: LoginComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'shop/detail', component: ShopDetailComponent },
  { path: 'notice', component: NoticeComponent },
  { path: 'qna', component: QnaComponent },
  { path: 'qna/detail', component: QnaDetailComponent },
];
