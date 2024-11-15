import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  public c1s = [
    {
      name: 'MEN',
      c2s: [
        {
          name: 'OUTER',
          c3s: ['자켓/점퍼', '바람막이/져지', '코트'],
          cover: '/images/category/men-outer.jpeg',
        },
        {
          name: 'TOP',
          c3s: ['티셔츠', '맨투맨/후드', '셔츠'],
          cover: '/images/category/men-top.jpeg',
        },
        {
          name: 'BOTTOM',
          c3s: ['청바지', '바지'],
          cover: '/images/category/men-bottom.jpeg',
        },
      ],
    },
    {
      name: 'WOMEN',
      c2s: [
        {
          name: 'OUTER',
          c3s: ['자켓/점퍼', '바람막이/져지', '코트'],
          cover: '/images/category/women-outer.jpeg',
        },
        {
          name: 'TOP',
          c3s: ['티셔츠', '맨투맨/후드', '셔츠'],
          cover: '/images/category/women-top.jpeg',
        },
        {
          name: 'BOTTOM',
          c3s: ['청바지', '바지', '스커트'],
          cover: '/images/category/women-bottom.jpeg',
        },
        {
          name: 'DRESS',
          c3s: [],
          cover: '/images/category/women-dress.jpeg',
        },
      ],
    },
    {
      name: 'KID',
      c2s: [],
    },
    {
      name: 'ACC',
      c2s: [
        {
          name: '모자',
          c3s: [],
          cover: '/images/category/acc-cap.jpeg',
        },
        {
          name: '신발',
          c3s: [],
          cover: '/images/category/acc-shoes.jpeg',
        },
        {
          name: '가방',
          c3s: [],
          cover: '/images/category/acc-bag.jpeg',
        },
        {
          name: '넥타이',
          c3s: [],
          cover: '/images/category/acc-tie.jpeg',
        },
        {
          name: 'ETC',
          c3s: [],
          cover: '/images/category/acc-etc.jpeg',
        },
      ],
    },
  ];

  getC1s() {
    return this.c1s;
  }
}
