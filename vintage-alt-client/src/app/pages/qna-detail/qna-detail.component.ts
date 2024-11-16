import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BoardService } from '../../services/board/board.service';

@Component({
  selector: 'app-qna-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './qna-detail.component.html',
  styleUrl: './qna-detail.component.css',
})
export class QnaDetailComponent implements OnInit {
  post: any = {};
  commentList: any[] = [];
  uid: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private boardService: BoardService
  ) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.route.queryParams.subscribe((params) => {
      this.uid = params['uid'];
    });
    this.fetchPostData();
    this.fetchComments();
  }

  fetchPostData(): void {
    this.boardService.getQnaDetail(this.uid).subscribe({
      next: (data) => {
        console.log(data);
        this.post = data;
      },
      error: (error) => {
        console.log(error.error);
      },
      complete: () => {
        console.log('요청 완료');
      },
    });
  }

  fetchComments(): void {
    this.boardService.getQnaComments(this.uid).subscribe({
      next: (data) => {
        console.log(data);
        this.commentList = data;
      },
      error: (error) => {
        console.log(error.error);
      },
      complete: () => {
        console.log('요청 완료');
      },
    });
  }

  getFormattedDate(dateString: string): string {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hour = String(date.getHours()).padStart(2, '0');
    const minute = String(date.getMinutes()).padStart(2, '0');
    return `${year}년 ${month}월 ${day}일 ${hour}시 ${minute}분`;
  }

  getMaskedName(name: string): string {
    const length = name?.length;
    if (length === 2) {
      return `${name[0]}*${name[1]}`;
    } else if (length === 3) {
      return `${name[0]}*${name[2]}`;
    } else if (length >= 4) {
      return `${name[0]}*${name.slice(-1)}`;
    }
    return name;
  }
}
