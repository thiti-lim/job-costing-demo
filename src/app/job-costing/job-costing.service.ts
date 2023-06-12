import { Injectable } from '@angular/core';
import { DirectLabor, DirectMaterial, JobCosting } from './job-costing.model';

@Injectable({
  providedIn: 'root',
})
export class JobCostingService {
  jobCostingList: JobCosting[] = [
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
  constructor() {}
  public getJobHistory(): JobCosting[] {
    return this.jobCostingList;
  }

  public getJobCosting(id: number): JobCosting | undefined {
    let job: JobCosting[] = this.getJobHistory().filter((job) => job.id == id);
    if (job.length != 0) return job[0];
    return;
  }

  public addMaterial(jobId: number, newMaterial: any) {
    let job: JobCosting | undefined = this.getJobCosting(jobId);
    job?.directMaterials?.push(
      new DirectMaterial(
        this.getNewJobId(jobId),
        newMaterial.reqNum,
        newMaterial.name,
        Number(newMaterial.units),
        Number(newMaterial.costPerUnit)
      )
    );
  }

  public removeMaterial(jobId: number, matId: number) {
    let job: JobCosting | undefined = this.getJobCosting(jobId);
    job!.directMaterials = job?.directMaterials?.filter(
      (mat) => mat.id != matId
    );
  }

  getNewJobId(jobId: number): number {
    let job: JobCosting | undefined = this.getJobCosting(jobId);
    if (job == null) return 0;
    if (job.directMaterials == null) return 0;
    if (job.directMaterials.length == 0) return 0;
    return job!.directMaterials![job!.directMaterials!.length - 1].id + 1;
  }
}
