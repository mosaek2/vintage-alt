import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PostQnaComponent } from '../../components/post-qna/post-qna.component';
import { BoardService } from '../../services/board/board.service';

@Component({
  selector: 'app-qna',
  standalone: true,
  imports: [CommonModule, PostQnaComponent],
  templateUrl: './qna.component.html',
  styleUrl: './qna.component.css',
})
export class QnaComponent implements OnInit {
  constructor(private boardService: BoardService) {}

  qnas: any;

  ngOnInit(): void {
    this.boardService.getQna().subscribe({
      next: (data) => {
        console.log(data);
        this.qnas = data;
      },
      error: (error) => {
        console.log(error.error);
      },
    });
  }
}
