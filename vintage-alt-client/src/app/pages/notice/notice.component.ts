import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PostNoticeComponent } from '../../components/post-notice/post-notice.component';
import { BoardService } from '../../services/board/board.service';

@Component({
  selector: 'app-notice',
  standalone: true,
  imports: [PostNoticeComponent, CommonModule],
  templateUrl: './notice.component.html',
  styleUrl: './notice.component.css',
})
export class NoticeComponent {
  notices: any[] = [];
  constructor(private boardService: BoardService) {}

  ngOnInit(): void {
    this.boardService.getNotice().subscribe({
      next: (data) => {
        console.log(data);
        this.notices = data;
      },
      error: (error) => {
        console.log(error.error);
      },
      complete: () => {
        console.log('요청 완료');
      },
    });
  }
}
