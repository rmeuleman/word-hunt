import { Grid } from "./grid";
import { GridConfiguration } from "./grid-configuration";
import { GridScanner } from "./grid-scanner";
import { getRandomNumber, pickRandomItem } from "./random";
import { WordGenerator } from "./word-generator";

export class GridGenerator {
  private wordGenerator: WordGenerator;
  private gridConfiguration: GridConfiguration;
  constructor(
    wordGenerator: WordGenerator,
    gridConfiguration: GridConfiguration
  )
  {
    this.wordGenerator = wordGenerator;
    this.gridConfiguration = gridConfiguration;
  }

  public generateGrid(): Grid {
    const grid = Grid.create(this.gridConfiguration.gridSize);
    const gridScanner = new GridScanner(grid);

    var wordLengthLimit = grid.size;

    while(wordLengthLimit > 2) {
      gridScanner.scan(wordLengthLimit);
      if(gridScanner.getResult().length > 0) {
        let word = this.wordGenerator.findWord(getRandomNumber(3, wordLengthLimit));
        if(word) {
          grid.putWord(word, pickRandomItem(gridScanner.getResult()));
        } else {
          wordLengthLimit--;
        }
      } else {
        wordLengthLimit--;
      }
    }

    grid.cells.flatMap(cell => cell).filter(cell => cell.isEmpty()).forEach(cell => {
      cell.putLetter('A');
    });

    return grid;
  }
}