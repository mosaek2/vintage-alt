import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-qna',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post-qna.component.html',
  styleUrl: './post-qna.component.css',
})
export class PostQnaComponent {
  @Input() post: any;

  constructor(private router: Router) {}

  getFormattedDate(dateString: string): string {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}.${month}.${day}`;
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

  goToQnaDetail(uid: string): void {
    this.router.navigateByUrl(`qna/detail?uid=${uid}`);
  }
}
