import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css',
})
export class ShopComponent implements OnInit {
  c1: string | null = null;
  c2: string | null = null;
  c3: string | null = null;
  page: number = 1;
  sort: string = 'new';

  constructor(
    private itemService: ItemService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.c1 = params['c1'];
      this.c2 = params['c2'];
      this.c3 = params['c3'];
    });
  }
}
