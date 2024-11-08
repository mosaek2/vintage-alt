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

  menuVisable = false;
  closeMenu() {
    this.menuVisable = false;
  }

  navigateToShop(c1: string = '', c2: string = '', c3: string = '') {
    this.shouldScrollToTop = true;
    const url = `shop?c1=${c1}&c2=${c2}&c3=${c3}`;
    this.router.navigateByUrl(url);
    this.closeMenu();
    this.hoveredSubCategoryName = null;
  }

  public hoveredSubCategoryName: string | null = null;

  public categories = [
    {
      name: 'MEN',
      subCategories: [
        {
          name: 'OUTER',
          items: ['자켓/점퍼', '바람막이/저지', '코트'],
          cover: '/images/category/men-outer.jpeg',
        },
        {
          name: 'TOP',
          items: ['티셔츠', '맨투맨/후드', '셔츠'],
          cover: '/images/category/men-top.jpeg',
        },
        {
          name: 'BOTTOM',
          items: ['청바지', '바지'],
          cover: '/images/category/men-bottom.jpeg',
        },
      ],
    },
    {
      name: 'WOMEN',
      subCategories: [
        {
          name: 'OUTER',
          items: ['자켓/점퍼', '바람막이/저지', '코트'],
          cover: '/images/category/women-outer.jpeg',
        },
        {
          name: 'TOP',
          items: ['티셔츠', '맨투맨/후드', '셔츠/블라우스'],
          cover: '/images/category/women-top.jpeg',
        },
        {
          name: 'BOTTOM',
          items: ['청바지', '바지', '스커트'],
          cover: '/images/category/women-bottom.jpeg',
        },
        {
          name: 'DRESS',
          items: [],
          cover: '/images/category/women-dress.jpeg',
        },
      ],
    },
    {
      name: 'KID',
      subCategories: [],
    },
    {
      name: 'ACC',
      subCategories: [
        {
          name: '모자',
          items: [],
          cover: '/images/category/acc-cap.jpeg',
        },
        {
          name: '신발',
          items: [],
          cover: '/images/category/acc-shoes.jpeg',
        },
        {
          name: '가방',
          items: [],
          cover: '/images/category/acc-bag.jpeg',
        },
        {
          name: '넥타이',
          items: [],
          cover: '/images/category/acc-tie.jpeg',
        },
        {
          name: 'ETC',
          items: [],
          cover: '/images/category/acc-etc.jpeg',
        },
      ],
    },
  ];
}
