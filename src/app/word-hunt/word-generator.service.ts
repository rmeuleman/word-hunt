import { Injectable } from '@angular/core';
import { Grid } from './grid';
import { WordGenerator } from './word-generator';

@Injectable()
export class WordGeneratorService {
  private wordGenerator: WordGenerator;

  constructor() {
    var request = new XMLHttpRequest();
    request.open('GET', 'assets/words.txt', false);  
    request.send(null);
    const response = request.responseText
      .normalize('NFD').replace(/[\u0300-\u036f\u0153]/g, '') // supprimer les caractères indésirables
      .toUpperCase();

    const words = response.split('\n')
      .filter(word => word.match(Grid.REGEX_WORD)); // supprimer les mots composés

    this.wordGenerator = new WordGenerator(words);
  }

  public getWordGenerator(): WordGenerator {
    return this.wordGenerator;
  }
}
