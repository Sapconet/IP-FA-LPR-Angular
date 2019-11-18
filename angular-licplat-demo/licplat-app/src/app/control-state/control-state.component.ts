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
    this.dataService.startPlateGrab();
  }

  stop() {
    this.dataService.stopPlateGrab();
  }

  resume() {
    this.dataService.resumePlateGrab();
  }

  suspend() {
    this.dataService.suspendPlateGrab();
  }
}
