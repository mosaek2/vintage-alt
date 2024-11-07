import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(private router: Router) {}

  navigateTo(page: string): void {
    this.router.navigate([page]);
  }

  public categories = [
    {
      name: 'MEN',
      subCategories: [
        {
          name: 'OUTER',
          items: ['자켓/점퍼', '바람막이/저지', '코트'],
        },
        {
          name: 'TOP',
          items: ['티셔츠', '맨투맨/후드', '셔츠'],
        },
        {
          name: 'BOTTOM',
          items: ['청바지', '바지'],
        },
      ],
    },
    {
      name: 'WOMEN',
      subCategories: [
        {
          name: 'OUTER',
          items: ['자켓/점퍼', '바람막이/저지', '코트'],
        },
        {
          name: 'TOP',
          items: ['티셔츠', '맨투맨/후드', '셔츠/블라우스'],
        },
        {
          name: 'BOTTOM',
          items: ['청바지', '바지', '스커트'],
        },
        {
          name: 'DRESS',
          items: ['원피스', '드레스'],
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
        },
        {
          name: '신발',
          items: [],
        },
        {
          name: '가방',
          items: [],
        },
        {
          name: '넥타이',
          items: [],
        },
        {
          name: 'ETC',
          items: [],
        },
      ],
    },
  ];

  public hoveredSubCategoryName: string | null = null;
}
