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
  editMode: boolean = false;
  job?: JobCosting;
  totalMaterial = 0;
  totalLabor = 0;
  totalOverhead = 0;

  constructor(
    private jobCostingService: JobCostingService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const jobNumber = this.route.snapshot.paramMap.get('job-number');
    this.job = this.jobCostingService.getJobCosting(jobNumber ?? '');
    console.log(this.job);
  }

  toggleEdit(): void {
    this.editMode = !this.editMode;
  }
  addMaterialInput(): void {
    console.log('add material');
  }
}
