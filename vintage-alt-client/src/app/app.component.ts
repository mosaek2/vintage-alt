import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { ItemService } from './services/item.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  private shouldScrollToTop = false;

  public c1s: any[] = [];
  constructor(private router: Router, private itemService: ItemService) {
    this.c1s = this.itemService.getC1s();
  }

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
    this.hoveredC2Name = null;
  }

  public hoveredC2Name: string | null = null;
}
