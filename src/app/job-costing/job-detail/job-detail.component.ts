import { Component } from '@angular/core';
import { JobCostingService } from '../job-costing.service';
import {
  DirectLaborForAdd,
  DirectMaterial,
  DirectMaterialForAdd,
  JobCosting,
} from '../job-costing.model';
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
  addingMaterial: boolean = false;
  job?: JobCosting;
  totalMaterial = 0;
  totalLabor = 0;
  totalOverhead = 0;
  materialForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    reqNum: new FormControl('', [Validators.required]),
    units: new FormControl('', [Validators.required, Validators.min(0)]),
    costPer: new FormControl('', [Validators.required, Validators.min(0)]),
  });
  laborForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    reqNum: new FormControl('', [Validators.required]),
    hours: new FormControl('', [Validators.required, Validators.min(0)]),
    costPer: new FormControl('', [Validators.required, Validators.min(0)]),
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

  materialInputOn(): void {
    this.addingMaterial = true;
  }

  materialInputOff(): void {
    this.addingMaterial = false;
  }

  addMaterial(dm: DirectMaterialForAdd) {
    this.jobCostingService.addMaterial(this.job?.id ?? 0, dm);
    this.materialForm.reset();
  }

  removeMaterial(matId: number) {
    this.jobCostingService.removeMaterial(this.job!.id, matId);
  }

  addNewCost(data: any) {
    if (data.type === 'material') {
      let dm = new DirectMaterialForAdd(
        data.name,
        data.reqNum,
        Number(data.costPer),
        Number(data.units)
      );
      console.log(dm);
      this.addMaterial(dm);
    } else if (data.type === 'labor') {
      let dl = new DirectLaborForAdd(
        data.name,
        data.reqNum,
        Number(data.costPer),
        Number(data.hours)
      );
      console.log(dl);
    } else {
      return;
    }
  }
}
