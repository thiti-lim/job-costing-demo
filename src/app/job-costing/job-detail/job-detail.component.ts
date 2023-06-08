import { Component } from '@angular/core';
import { JobCostingService } from '../job-costing.service';
import { JobCosting } from '../job-costing.model';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'jc-demo-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css'],
})
export class JobDetailComponent {
  headerTitle: string = 'Job Detail';
  job?: JobCosting;
  constructor(
    private jobCostingService: JobCostingService,
    private route: ActivatedRoute,
    private router: RouterModule
  ) {}

  ngOnInit(): void {
    const jobNumber = this.route.snapshot.paramMap.get('job-number');
    this.job = this.jobCostingService.getJobCosting(jobNumber ?? '');
    this.headerTitle += ' | ' + this.job?.jobNumber;
    console.log(this.job);
  }
}