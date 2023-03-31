import { pickRandomItem } from "./random";

export class WordGenerator {
  private readonly words: string[];
  private readonly previouslyReturnedWords: string[];

  constructor(
    words: string[]
  ) 
  {
    this.words = words
    this.previouslyReturnedWords = [];
  }

  public findWord(length: number, firstLetter: string | undefined = undefined): string|undefined {
    if(length <= 1) {
      throw new Error(`invalid length: ${length}`)
    }

    const filteredWords = this.words
      .filter(word => !this.previouslyReturnedWords.includes(word))
      .filter(word => firstLetter ? word.startsWith(firstLetter) : true)
      .filter(word => word.length == length);
 
    const word = filteredWords.length > 0 ? pickRandomItem(filteredWords) : undefined;

    if(word) {
      this.previouslyReturnedWords.push(word);
    }

    return word;
  }
}