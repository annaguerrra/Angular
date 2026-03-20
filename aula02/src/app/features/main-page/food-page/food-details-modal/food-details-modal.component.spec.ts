import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodDetailsModalComponent } from './food-details-modal.component';

describe('FoodDetailsModalComponent', () => {
  let component: FoodDetailsModalComponent;
  let fixture: ComponentFixture<FoodDetailsModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoodDetailsModalComponent]
    });
    fixture = TestBed.createComponent(FoodDetailsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
