import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Grid } from '../grid';
import { GridConfiguration } from '../grid-configuration';
import { GridGenerator } from '../grid-generator';
import { WordGenerator } from '../word-generator';
import { WordGeneratorService } from '../word-generator.service';

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.css']
})
export class GridViewComponent implements OnInit, AfterViewInit {
  gridConfiguration: GridConfiguration;

  grid: Grid;

  @ViewChild('gridCanvas', {static: false}) gridCanvas: ElementRef;

  gridContext: CanvasRenderingContext2D;

  constructor(
    private route: ActivatedRoute,
    private wordGeneratorService: WordGeneratorService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.gridConfiguration = new GridConfiguration(params['gridSize']);
    })

    // const wordGenerator = new WordGenerator([
    //   'MOT', // 3-letter word
    //   'DENT', // 4-letter word
    //   'ARBRE', // 5-letter word
    //   'BIERRE', // 6-letter word
    // ])

    const gridGenerator = new GridGenerator(this.wordGeneratorService.getWordGenerator(), this.gridConfiguration);

    this.grid = gridGenerator.generateGrid();
    console.log(this.grid.toString());
  }

  ngAfterViewInit(): void {
    this.gridContext = this.gridCanvas.nativeElement.getContext('2d');
    this.drawGrid();
  }

  private drawGrid(): void {
    this.gridContext.fillStyle = '#000000';

    const rectSize = 40;

    const fontSize = rectSize - 2;
    this.gridContext.font = `${fontSize}px arial`;
    this.gridContext.textBaseline = 'top'
    this.gridContext.textAlign = 'center';

    this.grid.cells.flatMap(cell => cell).forEach(cell => {
      
      this.gridContext.beginPath();
      let x = (cell.location.column * rectSize);
      let y = (cell.location.row * rectSize);
      this.gridContext.rect(x, y, rectSize, rectSize);
      this.gridContext.stroke();

      let letter = cell.getLetter();
      if(letter) {
        this.gridContext.fillText(letter, x + (rectSize / 2), y + ((rectSize - fontSize) * 2));
      }
    });
  }
}
