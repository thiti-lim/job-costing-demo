import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { RouterModule, Routes } from '@angular/router';
import { AddJobComponent } from './job-costing/add-job/add-job.component';
import { JobHistoryComponent } from './job-costing/job-history/job-history.component';

const routes: Routes = [
  { path: 'job-costing', component: JobHistoryComponent },
  // Add more routes as needed
];

@NgModule({
  declarations: [AppComponent, AddJobComponent, JobHistoryComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MaterialModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
