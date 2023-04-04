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
      case Direction.UP: {
        return new Vector(-1, 0);
      }
      case Direction.UP_RIGHT: {
        return new Vector(-1, 1)
      }
      case Direction.RIGHT: {
        return new Vector(0, 1);
      }
      case Direction.RIGHT_DOWN: {
        return new Vector(1, 1);
      }
      case Direction.DOWN: {
        return new Vector(1, 0);
      }
      case Direction.DOWN_LEFT: {
        return new Vector(1, -1);
      }
      case Direction.LEFT: {
        return new Vector(0, -1);
      }
      case Direction.LEFT_UP: {
        return new Vector(-1, -1);
      }
    }
  }

  public toString(): String {
    return `(${this.row},${this.column})`;
  }
}