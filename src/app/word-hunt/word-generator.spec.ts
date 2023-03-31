import { WordGenerator } from "./word-generator";

describe('WordGenerator', () => {
  var words: string[] = [];
  
  beforeEach(() => { 
    words = [
    'MOT', // 3-letter word
    'DENT', // 4-letter word
    'ARBRE', // 5-letter word
    'BIERRE', // 6-letter word
    ]
  });
  
  describe('findWord', () => {
    it('should throw an error on length of 1', () => {
      expect(() => new WordGenerator(words).findWord(1)).toThrowError('invalid length: 1');
    })
    it('should throw an error on zero length', () => {
      expect(() => new WordGenerator(words).findWord(0)).toThrowError('invalid length: 0');
    })
    it('should throw an error on negative length', () => {
      expect(() => new WordGenerator(words).findWord(-1)).toThrowError('invalid length: -1');
    })

    it('should return 3-letter word', () => {
      expect(new WordGenerator(words).findWord(3)).toEqual('MOT');
    })
    it('should return 4-letter word', () => {
      expect(new WordGenerator(words).findWord(4)).toEqual('DENT');
    })
    it('should return 5-letter word', () => {
      expect(new WordGenerator(words).findWord(5)).toEqual('ARBRE');
    })
    it('should return 6-letter word', () => {
      expect(new WordGenerator(words).findWord(6)).toEqual('BIERRE');
    })

    it('should return undefined', () => {
      expect(new WordGenerator(words).findWord(7)).toBeUndefined();
    })

    it('should not return the same word twice', () => {
      const wordGenerator = new WordGenerator(words);
      wordGenerator.findWord(3); // return 'MOT'
      expect(wordGenerator.findWord(3)).toBeUndefined();
    })

    it('should return 3-letter word starting with the letter \'M\'', () => {
      const wordGenerator = new WordGenerator(words);
      words.unshift('NON');

      
      expect(wordGenerator.findWord(3, 'M')).toEqual('MOT');
    })

  })

});