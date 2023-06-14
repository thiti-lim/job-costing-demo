import { Component, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'cost-column',
  templateUrl: './cost-column.component.html',
  styleUrls: ['./cost-column.component.css'],
})
export class CostColumnComponent {
  @Input() columnType: string = '';
  @Input() columnHeader: string = '';
  @Input() addCostForm: FormGroup = new FormGroup({});
  @Input() columnIcon: string = '';
  @Input() costList: any[] = [];
  @Input() totalCost: number = 0;
  @Input() onRemove: (cost: any) => void = () => {};
  @Input() costUnit: string = '';
  @Output() newCostEmitter = new EventEmitter<Object>();

  isRemovingCost: boolean = false;
  isAddingCost: boolean = false;

  removeCostOn(): void {
    this.isRemovingCost = true;
  }

  removeCostOff(): void {
    this.isRemovingCost = false;
  }

  addCostOn(): void {
    this.isAddingCost = true;
  }

  addCostOff(): void {
    this.isAddingCost = false;
  }

  displayCheck(): boolean {
    return this.isRemovingCost || this.isAddingCost;
  }

  handleSubmit(): void {
    if (this.isRemovingCost) {
      this.removeCostOff();
      this.addCostOff();
      return;
    }
    this.addCostForm.value.type = this.columnType;
    console.log(this.addCostForm.value);
    this.newCostEmitter.emit(this.addCostForm.value);
    this.removeCostOff();
    this.addCostOff();
  }

  handleCancel(): void {
    this.removeCostOff();
    this.addCostOff();
  }
}
