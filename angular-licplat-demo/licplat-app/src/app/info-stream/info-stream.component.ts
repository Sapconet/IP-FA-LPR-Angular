import { Component, OnInit, NgZone } from '@angular/core';
import { DataManagerService } from 'src/app/services/data-manager.service';
import { LicencePlate } from 'src/app/models/licplat';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { AppService } from '../services/app.service'

@Component({
  selector: 'app-info-stream',
  templateUrl: './info-stream.component.html',
  styleUrls: ['./info-stream.component.css']
})
export class InfoStreamComponent implements OnInit {
  licenceplates: LicencePlate[];
  totalUpdates = 0;

  constructor(private dataService: DataManagerService, private zone: NgZone, private appService: AppService) { }

  async ngOnInit() {
    this.appService.setTitle('Information Live Stream');

    console.log("Getting plates ...");
    this.dataService.getLicencePlates()
      .subscribe(res => {
        this.zone.run(() => {
          this.licenceplates = res;
          if (this.licenceplates && this.licenceplates.length > 0) {
            this.totalUpdates++;
            this.test();
          }
        });
      }
      );
  }

  test() {
    console.log('IT WORKS');
    this.dataService.startPlateGrab();
  }
}
