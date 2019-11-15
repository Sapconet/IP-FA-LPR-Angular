import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable()
export class SomeService {}

export interface LicencePlate {
  image: string;
  prediction: string;
  value: number;
  last_seen_date: string;
  last_seen_location: string;
  arrival_departure: string;
  description: string;
}

const ELEMENT_DATA: LicencePlate[] = [
  {
    image:
      "http://businesstech.co.za/news/wp-content/uploads/2016/11/MandelaPlate.jpg",
    // image: 'licplat-app/src/app/resources-images/MandelaPlate.jpg',
    prediction: "MANDELAGP",
    value: 0.87,
    last_seen_date: "11-11-2019::07:51",
    last_seen_location: "Saiccor Mills",
    arrival_departure: "Arrival",
    description: `SAPPI Truck`
  },
  {
    image:
      "https://midsouthcoastrisingsun.co.za/wp-content/uploads/sites/129/2016/08/Kfz-SA-Gauteng.jpg",
    prediction: "RDW112GP",
    value: 0.95,
    last_seen_date: "11-11-2019::08:22",
    last_seen_location: "Tugela Mills",
    arrival_departure: "Departure",
    description: `Outsourced Truck`
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/48/South_Africa_-_Gauteng_plate_%287%29.JPG",
    prediction: "LGC096GP",
    value: 0.93,
    last_seen_date: "11-11-2019::08:34",
    last_seen_location: "Ngodwana Mills",
    arrival_departure: "Departure",
    description: `SAPPI Truck`
  },
  {
    image:
      "https://img.bidorbuy.co.za/image/upload/v1534150060/user_images/740/2137740/180813103615_IMG_20180813_100850.jpg",
    prediction: "FP94SJGP",
    value: 0.96,
    last_seen_date: "11-11-2019::08:36",
    last_seen_location: "Lomati Sawmill",
    arrival_departure: "Arrival",
    description: `SAPPI Truck`
  },
  {
    image:
      "https://img.bidorbuy.co.za/image/upload/user_images/740/2137740/180302145038_100_9546.jpg",
    prediction: "KFV654GP",
    value: 0.89,
    last_seen_date: "11-11-2019::08:42",
    last_seen_location: "Stanger Mills",
    arrival_departure: "Departure",
    description: `Outsourced Truck`
  },
  {
    image:
      "https://img.bidorbuy.co.za/image/upload/v1534149811/user_images/740/2137740/180813103211_IMG_20180813_101054.jpg",
    prediction: "SZC312GP",
    value: 0.92,
    last_seen_date: "11-11-2019::08:57",
    last_seen_location: "Saiccor Mills",
    arrival_departure: "Departure",
    description: `SAPPI Truck`
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/2d/South_Africa_-_Gauteng_plate_%282%29.JPG",
    prediction: "WJB388GP",
    value: 0.97,
    last_seen_date: "11-11-2019::09:06",
    last_seen_location: "Tugela Mills",
    arrival_departure: "Arrival",
    description: `SAPPI Truck`
  }
];
