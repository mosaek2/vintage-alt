import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from '../../services/item/item.service';

@Component({
  selector: 'app-shop-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shop-detail.component.html',
  styleUrl: './shop-detail.component.css',
})
export class ShopDetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private itemService: ItemService
  ) {}

  uid: string = '';
  item: any;

  ngOnInit(): void {
    window.scrollTo(0, 0);

    this.route.queryParams.subscribe((params) => {
      this.uid = params['uid'];

      this.itemService.getItem(this.uid).subscribe({
        next: (data) => {
          console.log(data);
          this.item = data;
        },
        error: (error) => {
          console.log(error.error);
        },
        complete: () => {
          console.log('요청 완료');
        },
      });
    });
  }

  wait() {
    alert('준비중입니다.');
  }
}
