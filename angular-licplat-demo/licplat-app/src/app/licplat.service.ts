import { Injectable } from "@angular/core";
import { Observable, of } from 'rxjs';

import { LicencePlate } from "./licplat";
import { LICPLAT_DATA } from "./mock-licplats";

@Injectable({
  providedIn: "root"
})
export class LicPlatService {
  constructor() {}

  getLicPlats(id: number): Observable<LicencePlate> {
     return of(LICPLAT_DATA.find(licplat => licplat.id === id));
  }
}
