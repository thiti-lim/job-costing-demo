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
}
