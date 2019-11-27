import { Component, OnInit, NgZone } from '@angular/core';
import { DataManagerService } from 'src/app/services/data-manager.service';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-control-state',
  templateUrl: './control-state.component.html',
  styleUrls: ['./control-state.component.css']
})
export class ControlStateComponent implements OnInit {
  appState: any;

  constructor(private dataService: DataManagerService, private zone: NgZone, private appService: AppService) {
    this.dataService.getAppState().subscribe(res => {
      this.zone.run(() => {
        console.log('At res ' + res);
        this.appState = res;
      });
    });
  }

  ngOnInit() {
    this.appService.setTitle('State Controller');
  }

  start() {
    console.log('Start button clicked');
    this.dataService.startPlateGrab();
  }

  stop() {
    console.log('Stop button clicked');
    this.dataService.stopPlateGrab();
  }

  resume() {
    console.log('Resume button clicked');
    this.dataService.resumePlateGrab();
  }

  suspend() {
    console.log('Suspend button clicked');
    this.dataService.suspendPlateGrab();
  }
}
