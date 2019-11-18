import { Component, OnInit, NgZone } from '@angular/core';
import { DataManagerService } from 'src/app/services/data-manager.service';
import { LicencePlate } from 'src/app/models/licplat';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-info-stream',
  templateUrl: './info-stream.component.html',
  styleUrls: ['./info-stream.component.css']
})
export class InfoStreamComponent implements OnInit {
  title = 'Information Live Stream';
  licenceplates: LicencePlate[];
  totalUpdates = 0;

  constructor(private dataService: DataManagerService, private zone: NgZone) { }

  async ngOnInit() {
    this.dataService.getLicencePlates()
      .subscribe(res => {
        this.zone.run(() => {
          this.licenceplates = res;
          if (this.licenceplates && this.licenceplates.length > 0) {
            this.totalUpdates++;
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
