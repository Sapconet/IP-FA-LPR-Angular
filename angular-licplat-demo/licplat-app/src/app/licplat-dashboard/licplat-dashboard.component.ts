import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AppService } from '../services/app.service';

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

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.setTitle('Dashboard');
  }

}
