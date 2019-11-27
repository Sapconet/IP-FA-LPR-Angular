import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { LicencePlate } from '../models/licplat';
// import { LICPLAT_DATA } from "../mock-licplats";
import { LicPlatService } from '../services/licplat.service';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-licplat-info',
  templateUrl: './licplat-info.component.html',
  styleUrls: ['./licplat-info.component.css']
})
export class LicplatInfoComponent implements OnInit {
  // tslint:disable-next-line: quotemark

  licplats: LicencePlate[];
  @Input() licplat: LicencePlate;

  constructor(
    private route: ActivatedRoute,
    private licPlatService: LicPlatService,
    private location: Location,
    private appService: AppService
  ) { }

  ngOnInit() {
    this.appService.setTitle('Licence Plate Information');
    this.getLicPlats();
  }

  getLicPlats(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.licPlatService
      .getLicPlats(id)
      .subscribe(licplat => (this.licplat = licplat));
  }

  goBack(): void {
    this.location.back();
  }
}
