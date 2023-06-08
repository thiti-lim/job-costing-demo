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
        'JOB-1',
        'Customer A',
        new Date('2019-01-01'),
        new Date('2020-01-01'),
        10,
        [new DirectMaterial(crypto.randomUUID(), 'meme', 10, 10)],
        [new DirectLabor(crypto.randomUUID(), 'meme', 10, 10, 0.8)]
      ),
    ];
  }

  public getJobCosting(jobNumber: string): JobCosting | undefined {
    let job: JobCosting[] = this.getJobHistory().filter(
      (job) => job.jobNumber === jobNumber
    );
    if (job.length != 0) return job[0];
    return;
  }
}
