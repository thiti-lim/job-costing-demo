import { JobCostingService } from './../job-costing.service';
import { Component } from '@angular/core';
import { JobCosting } from '../job-costing.model';
import { Router } from '@angular/router';

@Component({
  selector: 'jc-demo-job-history',
  templateUrl: './job-history.component.html',
  styleUrls: ['./job-history.component.css'],
})
export class JobHistoryComponent {
  headerTitle: string = 'Job History';
  jobHistoryList: JobCosting[] = [];
  displayedColumns: string[] = [
    'jobNumber',
    'customerName',
    'amount',
    'startDate',
    'finishDate',
  ];

  constructor(
    private jobCostingService: JobCostingService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.jobHistoryList = this.jobCostingService.getJobHistory();
    console.log(this.jobHistoryList);
  }

  openJobDetail(job: JobCosting) {
    this.router.navigate([
      '/job-costing/job',
      job.jobNumber.toLocaleLowerCase(),
    ]);
    console.log(job.jobNumber);
  }
}
