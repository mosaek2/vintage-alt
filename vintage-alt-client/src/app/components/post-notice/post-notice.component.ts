import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-notice',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post-notice.component.html',
  styleUrl: './post-notice.component.css',
})
export class PostNoticeComponent {
  @Input() post: any;

  getFormattedDate(dateString: string): string {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}.${month}.${day}`;
  }
}
