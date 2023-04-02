import { Grid } from "./grid";
import { GridGenerator } from "./grid-generator";
import { WordGenerator } from "./word-generator";
import { Cell } from "./cell";
import { GridConfiguration } from "./grid-configuration";


describe('GridGenerator', () => {
  const wordGenerator = new WordGenerator ([
    'MOT', // 3-letter word
    'DENT', // 4-letter word
    'ARBRE', // 5-letter word
    'BIERRE', // 6-letter word
  ]);

  it('should return grid of size 6', () => {
    const gridConfig = new GridConfiguration(6);
    const gridGenerator: GridGenerator = new GridGenerator(wordGenerator, gridConfig);
    expect(gridGenerator.generateGrid().size).toEqual(6);
  })

  it('should return grid of filled cells', () => {
    const gridConfig = new GridConfiguration(6);
    const gridGenerator: GridGenerator = new GridGenerator(wordGenerator, gridConfig);
    const grid = gridGenerator.generateGrid();
    expect(grid.cells.flatMap(cell => cell).find((cell) => cell.isEmpty())).toBeUndefined();
  })
});