export class JobCosting {
  constructor(
    jobNumber: string,
    customerName: string,
    startDate: Date,
    finishDate: Date,
    amount?: number,
    directMaterials?: DirectMaterial[],
    directLabors?: DirectLabor[]
  ) {
    this.id = crypto.randomUUID();
    this.jobNumber = jobNumber;
    this.customerName = customerName;
    this.startDate = startDate;
    this.finishDate = finishDate;
    this.amount = amount ?? 0;
    this.directMaterials = directMaterials;
    this.directLabors = directLabors;
  }
  id: string;
  jobNumber: string;
  customerName: string;
  startDate: Date;
  finishDate: Date;
  amount: number;
  directMaterials?: DirectMaterial[];
  directLabors?: DirectLabor[];
}

export class DirectMaterial {
  constructor(
    reqNum?: string,
    name?: string,
    units?: number,
    costPerUnit?: number
  ) {
    this.id = crypto.randomUUID();
    this.reqNum = reqNum ?? '';
    this.name = name ?? '';
    this.units = units ?? 0;
    this.costPerUnit = costPerUnit ?? 0;
  }
  id: string;
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
    reqNum?: string,
    name?: string,
    hours?: number,
    costPerHour?: number,
    overheadRate?: number
  ) {
    this.id = crypto.randomUUID();
    this.reqNum = reqNum ?? '';
    this.name = name ?? '';
    this.hours = hours ?? 0;
    this.costPerHour = costPerHour ?? 0;
    this.overheadRate = overheadRate ?? 0;
  }
  id: string;
  reqNum: string;
  name: string;
  hours: number = 0;
  costPerHour: number = 0;
  overheadRate: number = 0;

  get totalCost(): number {
    return this.hours * this.costPerHour;
  }
}
