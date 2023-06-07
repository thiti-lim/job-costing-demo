import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'jc-demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private router: Router) {}

  headerTitle = 'Home';
  routeTitles = new Map<string, string>([
    ['/job-costing', 'Job Costing'],
    ['/add-job-costing', 'Add Job Costing'],
  ]);

  onRouteChange() {
    let currentRouteUrl: string = this.router.url;
    this.headerTitle = this.routeTitles.get(currentRouteUrl) ?? 'Home';
  }
}
