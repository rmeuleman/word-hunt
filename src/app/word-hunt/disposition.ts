import { Location } from "./location";
import { Vector } from "./vector";

/**
 * Représente la disposition d'un mot.
 * La disposition d'un mot est composé des coordonées de la première lettre et de la direction du mot
 */
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