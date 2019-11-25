import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-licplat-dashboard',
  templateUrl: './licplat-dashboard.component.html',
  styleUrls: ['./licplat-dashboard.component.css']
})
export class LicplatDashboardComponent implements OnInit {
  title = 'Dashboard';
  minDate = new Date(2015, 0, 1);
  maxDate = new Date();
  date = new FormControl(new Date());

  constructor() { }

  ngOnInit() {
  }

}
