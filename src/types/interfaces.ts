namespace Interfaces {
  export interface Location {
    name: string;
    lat: number;
    long: number;
  }
  export interface Journey {
    firstName: string;
    origin: Location;
    destination: Location;
    date: string;
  }
}