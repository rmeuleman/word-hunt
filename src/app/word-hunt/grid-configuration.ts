import { allDirections, Direction } from "./direction";
import { Grid } from "./grid";

export class GridConfiguration {
  public static readonly MIN_GRID_SIZE: number = 6;
  public static readonly MAX_GRID_SIZE: number = 20;


  constructor(
    public gridSize: number = 10,
    public minWordLength: number = 3,
    public maxWordLength: number = 6,
    // public wordDirections: Direction[] = allDirections()
  ) 
  {

  }


}