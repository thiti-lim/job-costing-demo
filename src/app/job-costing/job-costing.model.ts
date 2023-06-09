import { NumberValueAccessor } from '@angular/forms';

export class JobCosting {
  constructor(
    id: number,
    jobNumber: string,
    customerName: string,
    startDate: Date,
    finishDate: Date,
    amount: number,
    directMaterials?: DirectMaterial[],
    directLabors?: DirectLabor[],
    overheadRate?: number
  ) {
    this.id = id;
    this.jobNumber = jobNumber;
    this.customerName = customerName;
    this.startDate = startDate;
    this.finishDate = finishDate;
    this.amount = amount;
    this.directMaterials = directMaterials;
    this.directLabors = directLabors;
    this.overheadRate = overheadRate ?? 0;
  }
  id: number;
  jobNumber: string;
  customerName: string;
  startDate: Date;
  finishDate: Date;
  amount: number;
  directMaterials?: DirectMaterial[];
  directLabors?: DirectLabor[];
  overheadRate: number;
}

export class DirectMaterial {
  constructor(
    id: number,
    reqNum?: string,
    name?: string,
    units?: number,
    costPerUnit?: number
  ) {
    this.id = id;
    this.reqNum = reqNum ?? '';
    this.name = name ?? '';
    this.units = units ?? 0;
    this.costPerUnit = costPerUnit ?? 0;
  }
  id: number;
  reqNum: string;
  name: string;
  units: number = 0;
  costPerUnit: number = 0;
  get totalCost(): number {
    return this.units * this.costPerUnit;
  }
}

export class DirectLabor {
  constructor(
    id: number,
    reqNum?: string,
    name?: string,
    hours?: number,
    costPerHour?: number
  ) {
    this.id = id;
    this.reqNum = reqNum ?? '';
    this.name = name ?? '';
    this.hours = hours ?? 0;
    this.costPerHour = costPerHour ?? 0;
  }
  id: number;
  reqNum: string;
  name: string;
  hours: number = 0;
  costPerHour: number = 0;

  get totalCost(): number {
    return this.hours * this.costPerHour;
  }
}
