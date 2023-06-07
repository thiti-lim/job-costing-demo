import { Injectable } from '@angular/core';
import { JobCosting } from './job-costing.model';

@Injectable({
  providedIn: 'root',
})
export class JobCostingService {
  constructor() {}
  public getJobHistory(): JobCosting[] {
    return [
      new JobCosting(1, 'Customer A', 1, '2019-01-01', '2020-01-01', 10),
      new JobCosting(2, 'Customer B', 2, '2019-02-02', '2020-02-02', 20),
      new JobCosting(3, 'Customer C', 3, '2019-03-03', '2020-03-03', 30),
    ];
  }
}
