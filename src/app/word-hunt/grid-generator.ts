import { Grid } from "./grid";
import { GridScanner } from "./grid-scanner";
import { getRandomNumber, pickRandomItem } from "./random";
import { WordGenerator } from "./word-generator";

export class GridGenerator {
  private wordGenerator: WordGenerator;

  constructor(
    wordGenerator: WordGenerator
  )
  {
    this.wordGenerator = wordGenerator;
  }

  public generateGrid(): Grid {
    const grid = Grid.create(6);
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

    return grid;
  }
}