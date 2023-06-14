import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostSummaryComponent } from './cost-summary.component';

describe('CostSummaryComponent', () => {
  let component: CostSummaryComponent;
  let fixture: ComponentFixture<CostSummaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CostSummaryComponent]
    });
    fixture = TestBed.createComponent(CostSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
