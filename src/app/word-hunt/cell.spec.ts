import { Cell } from "./cell";
import { Location } from "./location";


describe('Cell', () => {
  describe('create', () => {
    it('should return empty cell', () => {
      const cell = Cell.create(new Location(0,0));
      expect(cell).toBeDefined();
      expect(cell.getLetter()).toBeUndefined();
    });
  });

  describe('putLetter', () => {
    it('should throw an error on number character', () => {
      const cell = Cell.create(new Location(0,0));
      expect(() => cell.putLetter('1')).toThrowError('invalid letter');
    });

    it('should throw an error on special character', () => {
      const cell = Cell.create(new Location(0,0));
      expect(() => cell.putLetter('é')).toThrowError('invalid letter');
    });

    it('should throw an error on multiple characters', () => {
      const cell = Cell.create(new Location(0,0));
      expect(() => cell.putLetter('abc')).toThrowError('invalid letter');
    });

    it('should capitalize letter', () => {
      const cell = Cell.create(new Location(0,0));
      cell.putLetter('a');
      expect(cell.getLetter()).toEqual('A');
    });
  });

  describe('isEmpty', () => {
    it('should return true on empty cell', () => {
      const cell = Cell.create(new Location(0,0));
      expect(cell.isEmpty()).toBeTruthy();
    });

    it('should return false on filled cell', () => {
      const cell = Cell.create(new Location(0,0));
      cell.putLetter('A');
      expect(cell.isEmpty()).toBeFalsy();
    });
  });
});