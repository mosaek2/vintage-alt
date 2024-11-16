import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shop-box.component.html',
  styleUrl: './shop-box.component.css',
})
export class ShopBoxComponent {
  constructor(private router: Router) {}

  @Input() item: any;

  discountRate: number = 0;

  ngOnInit() {
    const discountRate = this.item?.discountRate ?? 0;
    this.discountRate = Math.round((1 - discountRate) * 100);
  }

  get formattedPrice(): string {
    return new Intl.NumberFormat('ko-KR').format(this.item?.price || 0);
  }
  get formattedFinalPrice(): string {
    return new Intl.NumberFormat('ko-KR').format(
      this.item?.price * this.item?.discountRate || 0
    );
  }

  goToDetail(uid: string) {
    const url = `detail?uid=${uid}`;
    this.router.navigateByUrl(url);
  }
}
