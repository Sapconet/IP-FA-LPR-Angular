import { Component, OnInit, NgZone } from '@angular/core';
import { DataManagerService } from 'src/app/services/data-manager.service';

@Component({
  selector: 'app-control-state',
  templateUrl: './control-state.component.html',
  styleUrls: ['./control-state.component.css']
})
export class ControlStateComponent implements OnInit {
  title = 'State Controller';
  appState: any;

  constructor(private dataService: DataManagerService, private zone: NgZone) {
    this.dataService.getAppState().subscribe(res => {
      this.zone.run(() => {
        console.log('At res ' + res);
        this.appState = res;
      });
    });
  }

  ngOnInit() {
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
