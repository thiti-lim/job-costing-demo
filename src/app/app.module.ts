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

registerLocaleData(localeTh);
const routes: Routes = [
  { path: 'job-costing', component: JobHistoryComponent },
  { path: 'job-costing/add', component: AddJobComponent },
  { path: 'job-costing/job/:job-number', component: JobDetailComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    AddJobComponent,
    JobHistoryComponent,
    JobDetailComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(routes),
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'th' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
