import { Direction } from "./direction";
import { Disposition } from "./disposition";
import { Grid } from "./grid"
import { Location } from "./location";
import { Vector } from "./vector";

describe('Grid', () => {
  describe('create', () => {
    it('should throw exception on invalid size', () => {
      expect(() => Grid.create(-1)).toThrowError('size must be greather than 2');
    })

    it('should return grid of size 3', () => {
      const grid = Grid.create(3);
      expect(grid.cells.length).toEqual(3);
      expect(grid.cells[0].length).toEqual(3);
    })

    it('should return grid of size 6', () => {
      const grid = Grid.create(6);
      expect(grid.cells.length).toEqual(6);
      expect(grid.cells[0].length).toEqual(6);
    })

    it('should return grid of empty cells', () => {
      const grid = Grid.create(2);
      expect(grid.cells[0][0].isEmpty()).toBeTruthy();
      expect(grid.cells[0][1].isEmpty()).toBeTruthy();
      expect(grid.cells[1][0].isEmpty()).toBeTruthy();
      expect(grid.cells[1][1].isEmpty()).toBeTruthy();
    })
  })

  describe('putWord', () => {
    it('should throw exception on word put twice', () => {
      const grid = Grid.create(3);
      grid.putWord('MOT', new Disposition(new Location(0, 0), Vector.create(Direction.RIGHT)));
      expect(() => grid.putWord('MOT', new Disposition(new Location(1, 0), Vector.create(Direction.RIGHT)))).toThrowError('cannot put the same word twice: MOT');
    })

    it('should throw exception on too long word', () => {
      const grid = Grid.create(4);
      expect(() => grid.putWord('ARBRE', new Disposition(new Location(0, 0), Vector.create(Direction.RIGHT)))).toThrowError('word is too long: ARBRE');
    })

    it('should throw exception on word containing 1 character', () => {
      const grid = Grid.create(4);
      expect(() => grid.putWord('A', new Disposition(new Location(0, 0), Vector.create(Direction.RIGHT)))).toThrowError('invalid word: A');
    })

    it('should throw exception on word containing special characters', () => {
      const grid = Grid.create(4);
      expect(() => grid.putWord('été', new Disposition(new Location(0, 0), Vector.create(Direction.RIGHT)))).toThrowError('invalid word: été');
    })

    it('should throw exception on word containing numbers', () => {
      const grid = Grid.create(4);
      expect(() => grid.putWord('L0L', new Disposition(new Location(0, 0), Vector.create(Direction.RIGHT)))).toThrowError('invalid word: L0L');
    })

    it('should throw exception on invalid location', () => {
      const grid = Grid.create(4);
      const location = new Location(4,1); 
      expect(() => grid.putWord('MOT', new Disposition(location, Vector.create(Direction.RIGHT)))).toThrowError('invalid location: [4,1]');
    })

    it('should throw exception when the word crosses the grid boundaries from left', () => {
      const grid = Grid.create(4);
      const location = new Location(0,0); 
      const vector = Vector.create(Direction.LEFT);
      expect(() => grid.putWord('MOT', new Disposition(location, vector))).toThrowError('word crosses grid boundaries');
    })
    it('should throw exception when the word crosses the grid boundaries from right', () => {
      const grid = Grid.create(4);
      const location = new Location(0,3); 
      const vector = Vector.create(Direction.RIGHT);
      expect(() => grid.putWord('MOT', new Disposition(location, vector))).toThrowError('word crosses grid boundaries');
    })
    it('should throw exception when the word crosses the grid boundaries from up', () => {
      const grid = Grid.create(4);
      const location = new Location(0,0); 
      const vector = Vector.create(Direction.UP);
      expect(() => grid.putWord('MOT', new Disposition(location, vector))).toThrowError('word crosses grid boundaries');
    })
    it('should throw exception when the word crosses the grid boundaries from down', () => {
      const grid = Grid.create(4);
      const location = new Location(3,0); 
      const vector = Vector.create(Direction.DOWN);
      expect(() => grid.putWord('MOT', new Disposition(location, vector))).toThrowError('word crosses grid boundaries');
    })

    it('should fills cell on 3-letter word and right direction', () => {
      const grid = Grid.create(3);
      grid.putWord('MOT', new Disposition(new Location(0, 0), Vector.create(Direction.RIGHT)))
      expect(grid.cells[0][0].getLetter()).toEqual('M');
      expect(grid.cells[0][1].getLetter()).toEqual('O');
      expect(grid.cells[0][2].getLetter()).toEqual('T');
    })

    it('should fills cell on 3-letter word and down direction', () => {
      const grid = Grid.create(3);
      grid.putWord('MOT', new Disposition(new Location(0, 2), Vector.create(Direction.DOWN)))
      expect(grid.cells[0][2].getLetter()).toEqual('M');
      expect(grid.cells[1][2].getLetter()).toEqual('O');
      expect(grid.cells[2][2].getLetter()).toEqual('T');
    })

    it('should fills cell on 3-letter word and left direction', () => {
      const grid = Grid.create(3);
      grid.putWord('MOT', new Disposition(new Location(2, 2), Vector.create(Direction.LEFT)))
      expect(grid.cells[2][2].getLetter()).toEqual('M');
      expect(grid.cells[2][1].getLetter()).toEqual('O');
      expect(grid.cells[2][0].getLetter()).toEqual('T');
    })

    it('should fills cell on 3-letter word and up direction', () => {
      const grid = Grid.create(3);
      grid.putWord('MOT', new Disposition(new Location(2,0), Vector.create(Direction.UP)))
      expect(grid.cells[2][0].getLetter()).toEqual('M');
      expect(grid.cells[1][0].getLetter()).toEqual('O');
      expect(grid.cells[0][0].getLetter()).toEqual('T');
    })

    it('should throw exception when the word overlaps another from left', () => {
      const grid = Grid.create(4);
      grid.putWord('LE', new Disposition(new Location(0, 0), Vector.create(Direction.RIGHT)))
      const location = new Location(0,3);
      const vector = Vector.create(Direction.LEFT);
      expect(() => grid.putWord('MOT', new Disposition(location, vector))).toThrowError('word overlaps another');
    })
    it('should throw exception when the word overlaps another from right', () => {
      const grid = Grid.create(4);
      grid.putWord('LE', new Disposition(new Location(0, 2), Vector.create(Direction.RIGHT)))
      const location = new Location(0,0); 
      const vector = Vector.create(Direction.RIGHT);
      expect(() => grid.putWord('MOT', new Disposition(location, vector))).toThrowError('word overlaps another');
    })
    it('should throw exception when the word overlaps another from up', () => {
      const grid = Grid.create(4);
      grid.putWord('LE', new Disposition(new Location(0, 0), Vector.create(Direction.RIGHT)))
      const location = new Location(2,1);
      const vector = Vector.create(Direction.UP);
      expect(() => grid.putWord('MOT', new Disposition(location, vector))).toThrowError('word overlaps another');
    })
    it('should throw exception when the word overlaps another from down', () => {
      const grid = Grid.create(4);
      grid.putWord('LE', new Disposition(new Location(3, 0), Vector.create(Direction.RIGHT)))
      const location = new Location(1,1); 
      const vector = Vector.create(Direction.DOWN);
      expect(() => grid.putWord('MOT', new Disposition(location, vector))).toThrowError('word overlaps another');
    })
  })
});
