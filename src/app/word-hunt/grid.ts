import { Cell } from "./cell";
import { Disposition } from "./disposition";
import { Location } from "./location";
import { Vector } from "./vector";

export class Grid {
  readonly cells:Cell[][];
  readonly size: number;
  readonly words: string[];

  public static MINIMUM_SIZE = 2;

  private static REGEX_WORD = new RegExp('^[a-zA-Z]{2,}$')

  private constructor(
    cells:Cell[][],
    size:number
  ) 
  {
    this.cells = cells;
    this.size = size;
    this.words = [];
  }

  public static create(size: number): Grid {
    if(size < Grid.MINIMUM_SIZE) {
      throw new Error(`size must be greather than ${Grid.MINIMUM_SIZE}`);
    }
    
    var cells: Cell[][] = [];
    for(var i = 0; i < size; i++) {
      cells[i] = [];
      for(var j = 0; j < size; j++) {
        cells[i][j] = Cell.create(new Location(i, j));
      }
    }

    return new Grid(cells, size);
  }

  public putWord(word: string, disposition: Disposition) {
    const {firstLetterLocation, vector} = disposition;

    if(firstLetterLocation.row < 0 || firstLetterLocation.column < 0 || firstLetterLocation.row >= this.size || firstLetterLocation.column >= this.size) {
      throw new Error(`invalid location: ${firstLetterLocation.toString()}`);
    }
    
    if(!Grid.REGEX_WORD.test(word)) {
      throw new Error(`invalid word: ${word}`);
    }

    if(word.length > this.size) {
      throw new Error(`word is too long: ${word}`);
    }

    if(this.words.includes(word)) {
      throw new Error(`cannot put the same word twice: ${word}`);
    }

    for(var index = 0; index < word.length; index++) {
      let location = new Location(firstLetterLocation.row + (vector.row * index), firstLetterLocation.column + (vector.column * index))
      if(location.row < 0 || location.column < 0 || location.row >= this.size || location.column >= this.size) {
        throw new Error('word crosses grid boundaries');
      }

      if(!this.cells[location.row][location.column].isEmpty()) {
        throw new Error('word overlaps another');
      }
    }

    for(var index = 0; index < word.length; index++) {
      let location = new Location(firstLetterLocation.row + (vector.row * index), firstLetterLocation.column + (vector.column * index))
      this.cells[location.row][location.column].putLetter(word.charAt(index));
    }

    this.words.push(word);
  }

  public toString(): String {
    var s = '\n';
    for(var i = 0; i < this.size; i++) {
      for(var j = 0; j < this.size; j++) {
        s += '|';
        s += this.cells[i][j].getLetter() ? this.cells[i][j].getLetter() : ' ';
      }
      s+= '|\n';
    }
    return s;
  }
}