import { Injectable } from "@angular/core";
import { Observable, of } from 'rxjs';

import { LicencePlate } from "../models/licplat";
import { LICPLAT_DATA } from "../models/mock-licplats";

@Injectable({
  providedIn: "root"
})
export class LicPlatService {
  constructor() { }

  getLicPlats(id: number): Observable<LicencePlate> {
    return of(LICPLAT_DATA.find(licplat => licplat.id === id));
  }
}
