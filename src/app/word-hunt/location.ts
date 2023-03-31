export class Location {
  readonly row: number;
  readonly column: number;

  constructor(
    row: number,
    column: number
  ) 
  {
    this.row = row;
    this.column = column;
  }

  public toString(): String {
    return `[${this.row},${this.column}]`;
  }

  public equals(location: Location): boolean {
    return this.row == location.row && this.column == location.column;
  }
}