import { Direction } from "./direction";
import { Disposition } from "./disposition";
import { Grid } from "./grid";
import { GridScanner } from "./grid-scanner";
import { Location } from "./location";
import { Vector } from "./vector";

describe('GridScanner', () => {
  describe('getResult', () => {
    it('should return 0 dispotions for grid of size 3 and 3-letter word', () => {
      const grid = Grid.create(3);
      
      const gridScanner = new GridScanner(grid);

      grid.putWord('LE', new Disposition(new Location(1, 0), Vector.create(Direction.DOWN)));
      gridScanner.scan("MOT");
      grid.putWord('MOT', new Disposition(new Location(0, 0), Vector.create(Direction.RIGHT)));
      gridScanner.scan("MOT");

      expect(gridScanner.getResult()).toHaveSize(0);
    });

    it('should return 2 dispositions for grid of size 3 and 3-letter word', () => {
      const grid = Grid.create(3);
      
      const gridScanner = new GridScanner(grid);
      
      grid.putWord('MOT', new Disposition(new Location(0, 0), Vector.create(Direction.RIGHT)));
      gridScanner.scan("MOT");
      grid.putWord('LIT', new Disposition(new Location(2, 0), Vector.create(Direction.RIGHT)));
      gridScanner.scan("MOT");

      expect(gridScanner.getResult()).toHaveSize(2);
      
      const expectedDispositions = [
        new Disposition(new Location(1, 2), Vector.create(Direction.LEFT)),
        new Disposition(new Location(1, 0), Vector.create(Direction.RIGHT))
      ]                            

      expectedDispositions.forEach(expectedDisposition => {
        expect(gridScanner.getResult()).toContain(expectedDisposition);
      });
    });

    it('should return 12 dispositions for grid of size 3 and 3-letter word', () => {
      const grid = Grid.create(3);

      const gridScanner = new GridScanner(grid);
      gridScanner.scan("MOT");

      expect(gridScanner.getResult()).toHaveSize(12);
      
      const expectedDispositions = [
        new Disposition(new Location(0, 0), Vector.create(Direction.RIGHT)),
        new Disposition(new Location(0, 0), Vector.create(Direction.DOWN)),

        new Disposition(new Location(0, 1), Vector.create(Direction.DOWN)),

        new Disposition(new Location(0, 2), Vector.create(Direction.LEFT)),
        new Disposition(new Location(0, 2), Vector.create(Direction.DOWN)),

        new Disposition(new Location(1, 0), Vector.create(Direction.RIGHT)),
        new Disposition(new Location(1, 2), Vector.create(Direction.LEFT)),

        new Disposition(new Location(2, 0), Vector.create(Direction.RIGHT)),
        new Disposition(new Location(2, 0), Vector.create(Direction.UP)),

        new Disposition(new Location(2, 1), Vector.create(Direction.UP)),

        new Disposition(new Location(2, 2), Vector.create(Direction.LEFT)),
        new Disposition(new Location(2, 2), Vector.create(Direction.UP)),
      ]                            

      expectedDispositions.forEach(expectedDisposition => {
        expect(gridScanner.getResult()).toContain(expectedDisposition);
      });
    });

    it('should return 8 dispotions for grid of size 4 and 3-letter word', () => {
      const grid = Grid.create(4);
      
      const gridScanner = new GridScanner(grid);
      grid.putWord('DEUX', new Disposition(new Location(0, 0), Vector.create(Direction.RIGHT)));
      gridScanner.scan("MOT");
      grid.putWord('MAIN', new Disposition(new Location(1, 0), Vector.create(Direction.RIGHT)));
      gridScanner.scan("MOT");

      expect(gridScanner.getResult()).toHaveSize(8);

      const expectedDispositions = [
        new Disposition(new Location(2, 0), Vector.create(Direction.RIGHT)),
        new Disposition(new Location(2, 3), Vector.create(Direction.LEFT)),

        new Disposition(new Location(2, 1), Vector.create(Direction.RIGHT)),
        new Disposition(new Location(2, 2), Vector.create(Direction.LEFT)),

        new Disposition(new Location(3, 0), Vector.create(Direction.RIGHT)),
        new Disposition(new Location(3, 3), Vector.create(Direction.LEFT)),

        new Disposition(new Location(3, 1), Vector.create(Direction.RIGHT)),
        new Disposition(new Location(3, 2), Vector.create(Direction.LEFT)),
      ]
      
      expectedDispositions.forEach(expectedDisposition => {
        expect(gridScanner.getResult()).toContain(expectedDisposition);
      });
    });

    it('should return 2 dispotions for grid of size 5 and 5-letter word', () => {      
      const grid = Grid.create(5);
      const gridScanner = new GridScanner(grid);

      grid.putWord('TROIS', new Disposition(new Location(0, 0), Vector.create(Direction.DOWN)));
      gridScanner.scan("ROCHE");
      grid.putWord('ARBRE', new Disposition(new Location(0, 1), Vector.create(Direction.DOWN)));
      gridScanner.scan("ROCHE");
      grid.putWord('CHIEN', new Disposition(new Location(0, 2), Vector.create(Direction.DOWN)));
      gridScanner.scan("ROCHE");
      grid.putWord('MERDE', new Disposition(new Location(0, 3), Vector.create(Direction.DOWN)));
      gridScanner.scan("ROCHE");

      expect(gridScanner.getResult()).toHaveSize(2);

      const expectedDispositions = [
        new Disposition(new Location(0, 4), Vector.create(Direction.DOWN)),
        new Disposition(new Location(4, 4), Vector.create(Direction.UP)),
      ]
      
      expectedDispositions.forEach(expectedDisposition => {
        expect(gridScanner.getResult()).toContain(expectedDisposition);
      });
    });
  });
});