import { Component } from '@angular/core';
import { JobCostingService } from '../job-costing.service';
import { DirectMaterial, JobCosting } from '../job-costing.model';
import { ActivatedRoute, RouterModule } from '@angular/router';
import {
  FormControl,
  FormGroup,
  Validators,
  ValidationErrors,
} from '@angular/forms';

@Component({
  selector: 'jc-demo-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css'],
})
export class JobDetailComponent {
  headerTitle: string = 'Job Detail';
  editMode: boolean = false;
  addingMaterial: boolean = false;
  job?: JobCosting;
  totalMaterial = 0;
  totalLabor = 0;
  totalOverhead = 0;
  materialForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    reqNum: new FormControl('', [Validators.required]),
    units: new FormControl('', [Validators.required, Validators.min(0)]),
    costPerUnit: new FormControl('', [Validators.required, Validators.min(0)]),
  });

  constructor(
    private jobCostingService: JobCostingService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const jobId = Number(this.route.snapshot.paramMap.get('id'));
    this.job = this.jobCostingService.getJobCosting(jobId ?? 0);
    console.log(this.job);
  }

  toggleEdit(): void {
    this.editMode = !this.editMode;
    if (!this.editMode) this.addingMaterial = false;
  }

  materialInputOn(): void {
    this.addingMaterial = true;
  }

  materialInputOff(): void {
    this.addingMaterial = false;
  }

  addMaterial() {
    this.jobCostingService.addMaterial(
      this.job?.id ?? 0,
      this.materialForm.value
    );
    this.materialForm.reset();
  }

  removeMaterial(matId: number) {
    this.jobCostingService.removeMaterial(this.job!.id, matId);
  }
}
