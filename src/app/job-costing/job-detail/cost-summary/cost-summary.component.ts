import { Component, Input } from '@angular/core';

@Component({
  selector: 'cost-summary',
  templateUrl: './cost-summary.component.html',
  styleUrls: ['./cost-summary.component.css'],
})
export class CostSummaryComponent {
  @Input() totalCost: number = 0;
  @Input() costPerUnit: number = 0;
}
