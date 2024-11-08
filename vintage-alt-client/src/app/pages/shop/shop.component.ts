import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule, FormsModule],
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

  constructor(private itemService: ItemService, private route: ActivatedRoute) {
    this.c1s = this.itemService.getC1s();
  }

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
      }
    });
  }

  onC1Change(): void {
    this.c2s = this.c1s.find((c1) => c1.name === this.selectedC1).c2s;
    this.selectedC2 = '';
    this.selectedC3 = '';
    this.c3s = [];
  }
  onC2Change(): void {
    this.c3s = this.c2s.find((c2) => c2.name === this.selectedC2).c3s;
    this.selectedC3 = '';
  }
}
