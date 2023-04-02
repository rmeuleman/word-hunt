import { Cell } from "./cell";
import { allDirections, Direction } from "./direction";
import { Disposition } from "./disposition";
import { Grid } from "./grid";
import { Location } from "./location";
import { Vector } from "./vector";

export class GridScanner {
  private readonly grid: Grid;
  private result: Disposition[];

  constructor(
    grid: Grid
  ) 
  {
    this.grid = grid;
    this.result = [];
  }

  public scan(word: string) {
    this.result = [];

    const emptyCells = this.grid.cells.flatMap(cell => cell).filter(cell => cell.isEmpty());

    emptyCells.forEach((emptyCell) => {
      allDirections().forEach((direction) => {
        let positionable = true;
        let index = 0;
        let vector = Vector.create(direction);
        while(positionable && index < word.length) {
          let location = new Location(emptyCell.location.row + (vector.row * index), emptyCell.location.column + (vector.column * index));
          if(location.row < 0 || location.column < 0 || location.row >= this.grid.size || location.column >= this.grid.size) {
            positionable = false;
          } else if(!this.grid.cells[location.row][location.column].isEmpty()) {
            positionable = false;
          } else {
            positionable = true;
          }
          index++;
        }
        if(positionable) {
          this.result.push(new Disposition(emptyCell.location, vector));
        }
      })
    })
  }

  public getResult(): Disposition[] {
    return this.result;
  }
}