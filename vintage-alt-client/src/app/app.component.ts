import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  private shouldScrollToTop = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd && this.shouldScrollToTop) {
        window.scrollTo(0, 0);
        this.shouldScrollToTop = false;
      }
    });
  }

  navigateTo(page: string): void {
    this.shouldScrollToTop = true;
    this.router.navigate([page]);
  }

  public categories = [
    {
      name: 'MEN',
      subCategories: [
        {
          name: 'OUTER',
          items: ['자켓/점퍼', '바람막이/저지', '코트'],
          cover: '/images/category/men-outer.png',
        },
        {
          name: 'TOP',
          items: ['티셔츠', '맨투맨/후드', '셔츠'],
          cover: '/images/category/men-top.png',
        },
        {
          name: 'BOTTOM',
          items: ['청바지', '바지'],
          cover: '/images/category/men-bottom.png',
        },
      ],
    },
    {
      name: 'WOMEN',
      subCategories: [
        {
          name: 'OUTER',
          items: ['자켓/점퍼', '바람막이/저지', '코트'],
          cover: '/images/category/women-outer.png',
        },
        {
          name: 'TOP',
          items: ['티셔츠', '맨투맨/후드', '셔츠/블라우스'],
          cover: '/images/category/women-top.png',
        },
        {
          name: 'BOTTOM',
          items: ['청바지', '바지', '스커트'],
          cover: '/images/category/women-bottom.png',
        },
        {
          name: 'DRESS',
          items: [],
          cover: '/images/category/women-dress.png',
        },
      ],
    },
    {
      name: 'KID',
      subCategories: [],
    },
    {
      name: 'ACCESORRY',
      subCategories: [
        {
          name: '모자',
          items: [],
          cover: '/images/category/acc-cap.png',
        },
        {
          name: '신발',
          items: [],
          cover: '/images/category/acc-shoes.png',
        },
        {
          name: '가방',
          items: [],
          cover: '/images/category/acc-bag.png',
        },
        {
          name: '넥타이',
          items: [],
          cover: '/images/category/acc-tie.png',
        },
        {
          name: 'ETC',
          items: [],
          cover: '/images/category/acc-etc.png',
        },
      ],
    },
  ];

  public hoveredSubCategoryName: string | null = null;
}
