import { JobCostingService } from './../job-costing.service';
import { Component } from '@angular/core';
import { JobCosting } from '../job-costing.model';

@Component({
  selector: 'jc-demo-job-history',
  templateUrl: './job-history.component.html',
  styleUrls: ['./job-history.component.css'],
})
export class JobHistoryComponent {
  jobHistoryList: JobCosting[] = [];
  displayedColumns: string[] = ['jobNumber', 'customerName', 'amount'];

  constructor(private jobCostingService: JobCostingService) {}

  ngOnInit(): void {
    this.jobHistoryList = this.jobCostingService.getJobHistory();
    console.log(this.jobHistoryList);
  }
}
