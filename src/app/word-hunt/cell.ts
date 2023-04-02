import { Location } from "./location";

export class Cell {
  readonly location: Location;
  private letter?: string;

  private static REGEX_LETTER = new RegExp('^[a-zA-Z]$')

  private constructor(
    location: Location,
  )
  {
    this.location = location;
  }

  public putLetter(letter: string) {
    if(!Cell.REGEX_LETTER.test(letter)) {
      throw new Error('invalid letter');
    }

    if(this.letter) {
      throw new Error('cell is already filled');
    }

    this.letter = letter.toUpperCase();
  }

  public getLetter(): string | undefined {
    return this.letter;
  }

  public isEmpty(): boolean {
    return !this.letter;
  }

  public static create(location: Location): Cell {
    return new Cell(location);
  }
}