import { Grid } from "./grid";
import { GridGenerator } from "./grid-generator";
import { WordGenerator } from "./word-generator";
import { Cell } from "./cell";


describe('GridGenerator', () => {

  const words = [
    'TEST',
    'DEUX',
    'MOT',
    'MERDE',
    'CIEL',
    'PLUME',
    'ARBRE', 
    'CODE',
    'NON',
    'OUI' 
  ]
  const wordGenerator = new WordGenerator(words);
  const gridGenerator = new GridGenerator(wordGenerator);
  const grid = gridGenerator.generateGrid();


  console.log(grid.toString());

  it('should...', () => {
  })
});