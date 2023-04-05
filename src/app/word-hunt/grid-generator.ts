import { Direction } from "./direction";
import { Grid } from "./grid";
import { GridConfiguration } from "./grid-configuration";
import { GridScanner } from "./grid-scanner";
import { getRandomNumber, pickRandomItem } from "./random";
import { WordGenerator } from "./word-generator";

export class GridGenerator {
  private readonly fillerLetters: string[] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  private wordGenerator: WordGenerator;
  private gridConfiguration: GridConfiguration;

  /**
   * 
   * @param wordGenerator le générateur de mot qui sera utilisé pour générer les grilles
   * @param gridConfiguration la config de grille qui sera utilisé pour générer les grilles
   */
  constructor(
    wordGenerator: WordGenerator,
    gridConfiguration: GridConfiguration
  )
  {
    this.wordGenerator = wordGenerator;
    this.gridConfiguration = gridConfiguration;
  }

  private directionIterator(directions: Direction[]) {
    let nextIndex = 0;
    return {
      next: function() {
        nextIndex = (nextIndex + 1) % directions.length;
        return { value: directions[nextIndex], done: false };
      }
    }
  }

  /**
   * Génére une grille à partir de la configuration de grille fourni au constructeur
   * @returns la grille générée
   */
  public generateGrid(): Grid {
    const grid = Grid.create(this.gridConfiguration.gridSize);
    const gridScanner = new GridScanner(grid);
    
    // remplir la grille avec le mot secret
    const secretWord = this.gridConfiguration.secretWord
    if(secretWord) {
      for(var index = 0; index < secretWord.length; index++) {
        let randomCell = pickRandomItem(grid.cells.flatMap(cell => cell));
        randomCell.putLetter(secretWord.charAt(index));
      }
    }

    var wordLengthLimit = this.gridConfiguration.maxWordLength;
    const directionIterator = this.directionIterator(this.gridConfiguration.wordDirections);

    // remplir la grille de mots
    while(wordLengthLimit >= this.gridConfiguration.minWordLength) {
      let word = this.wordGenerator.findWord(getRandomNumber(this.gridConfiguration.minWordLength, wordLengthLimit));
      if(word && !grid.words.includes(word)) {
        // gridScanner.scan(word, this.gridConfiguration.wordDirections);
        gridScanner.scan(word, [directionIterator.next().value]);
        if(gridScanner.getResult().length > 0) {
          grid.putWord(word, pickRandomItem(gridScanner.getResult()));
        } else {
          wordLengthLimit--;
        }
      } else {
        wordLengthLimit--;
      }
    }

    // remplir les cellules vides restantes
    grid.cells.flatMap(cell => cell).filter(cell => cell.isEmpty()).forEach(cell => {
      cell.putLetter(pickRandomItem(secretWord ? secretWord.split('') : this.fillerLetters));
    });

    return grid;
  }
}