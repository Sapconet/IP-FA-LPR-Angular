// Future capabilities, perhaps?
/* export interface LicencePlate {
  id: number;
  prediction: string;
  value: number;
  timestamp: string;
  location: string;
  cameraId: string;
  arrival_departure: string;
  description: string;
  image: string;
}*/

/*export interface old_LicencePlate {
  image: string;
  prediction: string;
  value: number;
  last_seen_date: string;
  last_seen_location: string;
  arrival_departure: string;
  description: string;
} */

// For Kafka
export interface LicencePlate {
  id: number;
  image: string;
  prediction: string;
  value: number;
}
