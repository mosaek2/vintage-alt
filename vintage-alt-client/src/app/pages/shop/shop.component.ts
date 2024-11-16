import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ShopBoxComponent } from '../../components/shop-box/shop-box.component';
import { CategoryService } from '../../services/category/category.service';
import { ItemService } from '../../services/item/item.service';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule, FormsModule, ShopBoxComponent],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css',
})
export class ShopComponent implements OnInit {
  public selectedC1: string = '';
  public selectedC2: string = '';
  public selectedC3: string = '';
  public page: number = 1;
  public sort: string = 'new';

  public c1s: any[] = [];
  public c2s: any[] = [];
  public c3s: any[] = [];

  constructor(
    private categoryService: CategoryService,
    private itemService: ItemService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.c1s = this.categoryService.getC1s();
  }

  items: any[] = [];

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.selectedC1 = params['c1'];
      if (this.selectedC1 !== 'NEW' && this.selectedC1 !== 'SALE') {
        this.c2s = this.c1s.find((c1) => c1.name === this.selectedC1).c2s;

        this.selectedC2 = params['c2'];
        if (this.selectedC2 !== '') {
          this.c3s = this.c2s.find((c2) => c2.name === this.selectedC2).c3s;
        }

        this.selectedC3 = params['c3'];

        this.sort = params['sort'];

        this.itemService
          .getItems(
            this.selectedC1,
            this.selectedC2,
            this.selectedC3,
            this.sort
          )
          .subscribe({
            next: (data) => {
              console.log(data);
              this.items = data;
            },
            error: (error) => {
              console.log(error.error);
            },
            complete: () => {
              console.log('요청 완료');
            },
          });
      } else {
        if (this.selectedC1 === 'NEW') {
          this.itemService.getNew().subscribe({
            next: (data) => {
              console.log(data);
              this.items = data;
            },
            error: (error) => {
              console.log(error.error);
            },
            complete: () => {
              console.log('요청 완료');
            },
          });
        } else {
          this.itemService.getSale().subscribe({
            next: (data) => {
              console.log(data);
              this.items = data;
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
    });
  }

  onC1Change(): void {
    this.c2s = this.c1s.find((c1) => c1.name === this.selectedC1).c2s;
    this.selectedC2 = '';
    this.selectedC3 = '';
    this.c3s = [];
    const url = `shop?c1=${this.selectedC1}&c2=${this.selectedC2}&c3=${this.selectedC3}&sort=${this.sort}`;
    this.router.navigateByUrl(url);
  }
  onC2Change(): void {
    this.c3s = this.c2s.find((c2) => c2.name === this.selectedC2).c3s;
    this.selectedC3 = '';
    const url = `shop?c1=${this.selectedC1}&c2=${this.selectedC2}&c3=${this.selectedC3}&sort=${this.sort}`;
    this.router.navigateByUrl(url);
  }
  onC3Change(): void {
    const url = `shop?c1=${this.selectedC1}&c2=${this.selectedC2}&c3=${this.selectedC3}&sort=${this.sort}`;
    this.router.navigateByUrl(url);
  }
  onSortChange(): void {
    const url = `shop?c1=${this.selectedC1}&c2=${this.selectedC2}&c3=${this.selectedC3}&sort=${this.sort}`;
    this.router.navigateByUrl(url);
  }
}
