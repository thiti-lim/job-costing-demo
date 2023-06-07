export class JobCosting {
  constructor(public id: number | undefined, public customerName: string, public jobNumber: number = 0, public startDate: string, public finishDate: string, public amount: number = 0) {}
}
