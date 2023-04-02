import { Location } from "./location";
import { Vector } from "./vector";

export class Disposition {
  readonly firstLetterLocation: Location;
  readonly vector: Vector;

  constructor(
    firstLetterLocation: Location,
    vector: Vector
  )
  {
    this.firstLetterLocation = firstLetterLocation;
    this.vector = vector;
  }

  public toString(): string {
    return this.firstLetterLocation.toString() + ":" + this.vector.toString(); 
  }
}