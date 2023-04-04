import { allDirections, Direction } from "./direction";
import { Grid } from "./grid";

export class GridConfiguration {

  constructor(
    public gridSize: number = 20,
    public minWordLength: number = 4,
    public maxWordLength: number = 8,
    public wordDirections: Direction[] = allDirections()
  ) 
  {

  }


}