import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { RouterModule, Routes } from '@angular/router';
import { AddJobComponent } from './job-costing/add-job/add-job.component';
import { JobHistoryComponent } from './job-costing/job-history/job-history.component';
import { JobDetailComponent } from './job-costing/job-detail/job-detail.component';
import localeTh from '@angular/common/locales/th';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { CostColumnComponent } from './job-costing/job-detail/cost-column/cost-column.component';
import { AddCostInputComponent } from './job-costing/job-detail/add-cost-input/add-cost-input.component';
import { CostSummaryComponent } from './job-costing/job-detail/cost-summary/cost-summary.component';
import { CostColumnOverheadComponent } from './job-costing/job-detail/cost-column-overhead/cost-column-overhead.component';
import { CapitalizePipe } from './helpers/capitalize.pipe';

registerLocaleData(localeTh);
const routes: Routes = [
  { path: 'job-costing', component: JobHistoryComponent },
  { path: 'job-costing/add', component: AddJobComponent },
  { path: 'job-costing/job/:id', component: JobDetailComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    AddJobComponent,
    JobHistoryComponent,
    JobDetailComponent,
    PageHeaderComponent,
    CostColumnComponent,
    AddCostInputComponent,
    CostSummaryComponent,
    CostColumnOverheadComponent,
    CapitalizePipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
