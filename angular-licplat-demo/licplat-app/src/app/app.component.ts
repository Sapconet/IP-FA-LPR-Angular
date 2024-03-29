import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: String;
  public constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.getTitle().subscribe(appTitle => this.title = appTitle);
  }
}
