import { Injectable } from '@angular/core';
import { DirectLabor, DirectMaterial, JobCosting } from './job-costing.model';

@Injectable({
  providedIn: 'root',
})
export class JobCostingService {
  constructor() {}
  public getJobHistory(): JobCosting[] {
    return [
      new JobCosting(
        1,
        'JOB-1',
        'Customer A',
        new Date('2019-01-01'),
        new Date('2020-01-01'),
        10,
        [
          new DirectMaterial(1, 'DM-123123123-001', 'Material A', 10, 10),
          new DirectMaterial(2, 'DM-123123123-002', 'Material B', 10, 10),
          new DirectMaterial(3, 'DM-123123123-003', 'Material C', 10, 10),
        ],
        [
          new DirectLabor(1, 'DL-123123123-001', 'Person A', 10, 10),
          new DirectLabor(2, 'DL-123123123-002', 'Person B', 10, 10),
          new DirectLabor(3, 'DL-123123123-003', 'Person C', 10, 10),
        ],
        0.8
      ),
      new JobCosting(
        1,
        'JOB-2',
        'Customer B',
        new Date('2019-02-02'),
        new Date('2020-02-02'),
        10,
        [
          new DirectMaterial(1, 'DM-123123123-001', 'Material A', 10, 10),
          new DirectMaterial(2, 'DM-123123123-002', 'Material B', 10, 10),
          new DirectMaterial(3, 'DM-123123123-003', 'Material C', 10, 10),
        ],
        [
          new DirectLabor(1, 'DL-123123123-001', 'Person A', 10, 10),
          new DirectLabor(2, 'DL-123123123-002', 'Person B', 10, 10),
          new DirectLabor(3, 'DL-123123123-003', 'Person C', 10, 10),
        ],
        0.8
      ),
      new JobCosting(
        1,
        'JOB-3',
        'Customer C',
        new Date('2019-03-03'),
        new Date('2020-03-03'),
        10,
        [
          new DirectMaterial(1, 'DM-123123123-001', 'Material A', 10, 10),
          new DirectMaterial(2, 'DM-123123123-002', 'Material B', 10, 10),
          new DirectMaterial(3, 'DM-123123123-003', 'Material C', 10, 10),
        ],
        [
          new DirectLabor(1, 'DL-123123123-001', 'Person A', 10, 10),
          new DirectLabor(2, 'DL-123123123-002', 'Person B', 10, 10),
          new DirectLabor(3, 'DL-123123123-003', 'Person C', 10, 10),
        ],
        0.8
      ),
    ];
  }

  public getJobCosting(jobNumber: string): JobCosting | undefined {
    let job: JobCosting[] = this.getJobHistory().filter(
      (job) =>
        job.jobNumber.toLocaleLowerCase() === jobNumber.toLocaleLowerCase()
    );
    if (job.length != 0) return job[0];
    return;
  }
}
