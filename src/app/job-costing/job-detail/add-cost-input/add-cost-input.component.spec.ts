import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCostInputComponent } from './add-cost-input.component';

describe('AddCostInputComponent', () => {
  let component: AddCostInputComponent;
  let fixture: ComponentFixture<AddCostInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddCostInputComponent]
    });
    fixture = TestBed.createComponent(AddCostInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
