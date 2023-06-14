import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostColumnOverheadComponent } from './cost-column-overhead.component';

describe('CostColumnOverheadComponent', () => {
  let component: CostColumnOverheadComponent;
  let fixture: ComponentFixture<CostColumnOverheadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CostColumnOverheadComponent]
    });
    fixture = TestBed.createComponent(CostColumnOverheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
