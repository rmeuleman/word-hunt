import { Direction } from "./direction";

export class Vector {
  readonly row: number;
  readonly column: number;

  private constructor(
    row:number,
    column: number
  )
  {
    this.row = row;
    this.column = column;
  }

  public static create(direction: Direction) {
    switch(direction) {
      case Direction.LEFT: {
        return new Vector(0, -1);
      }
      case Direction.RIGHT: {
        return new Vector(0, 1);
      }
      case Direction.UP: {
        return new Vector(-1, 0);
      }
      case Direction.DOWN: {
        return new Vector(1, 0);
      }
    }
  }
}