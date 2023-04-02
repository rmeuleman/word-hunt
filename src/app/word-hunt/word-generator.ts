import { pickRandomItem } from "./random";

export class WordGenerator {
  private readonly words: string[];

  constructor(
    words: string[]
  ) 
  {
    this.words = words
  }

  public findWord(length: number, firstLetter: string | undefined = undefined): string|undefined {
    if(length <= 1) {
      throw new Error(`invalid length: ${length}`)
    }

    const filteredWords = this.words
      .filter(word => firstLetter ? word.startsWith(firstLetter) : true)
      .filter(word => word.length == length);
 
    const word = filteredWords.length > 0 ? pickRandomItem(filteredWords) : undefined;

    return word;
  }
}