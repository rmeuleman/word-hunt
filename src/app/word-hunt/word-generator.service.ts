import { Injectable } from '@angular/core';
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
      .replace('-', '') // supprimer les -
      .replace('\'', '') // supprimer les '
      .toUpperCase();

    this.wordGenerator = new WordGenerator(response.split('\n'));
  }

  public getWordGenerator(): WordGenerator {
    return this.wordGenerator;
  }
}
