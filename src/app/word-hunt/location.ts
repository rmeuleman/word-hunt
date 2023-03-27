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
}