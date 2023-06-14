import { Component, Input } from '@angular/core';

@Component({
  selector: 'overhead-column',
  templateUrl: './cost-column-overhead.component.html',
  styleUrls: ['./cost-column-overhead.component.css'],
})
export class CostColumnOverheadComponent {
  @Input() directLabors: any[] = [];
  @Input() overheadRate: number = 0;
  @Input() totalOverhead: number = 0;
}
