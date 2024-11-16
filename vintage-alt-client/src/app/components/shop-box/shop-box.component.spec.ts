import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopBoxComponent } from './shop-box.component';

describe('ShopBoxComponent', () => {
  let component: ShopBoxComponent;
  let fixture: ComponentFixture<ShopBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
