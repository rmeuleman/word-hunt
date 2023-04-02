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

  private cellSizeInPx: number;

  @ViewChild('gridCanvas', {static: false}) gridCanvas: ElementRef;

  gridContext: CanvasRenderingContext2D;

  constructor(
    private route: ActivatedRoute,
    private wordGeneratorService: WordGeneratorService
  ) {}

  ngOnInit(): void {
    
    // récupérer la config de la grille
    this.route.queryParams.subscribe(params => {
      this.gridConfiguration = new GridConfiguration();
      this.gridConfiguration.gridSize = params['gridSize'];
      this.gridConfiguration.minWordLength = +params['minWordLength'];
      this.gridConfiguration.maxWordLength = +params['maxWordLength'];
    })

    // générer la grille
    const gridGenerator = new GridGenerator(this.wordGeneratorService.getWordGenerator(), this.gridConfiguration);
    this.grid = gridGenerator.generateGrid();
  }

  ngAfterViewInit(): void {
    this.cellSizeInPx = Math.min((800 / this.grid.size), 40);
    this.gridContext = this.gridCanvas.nativeElement.getContext('2d');
    this.gridContext.canvas.width = this.cellSizeInPx * this.grid.size;
    this.gridContext.canvas.height = this.cellSizeInPx * this.grid.size;  
    this.drawGrid();
  }

  private drawGrid(): void {
    this.gridContext.fillStyle = '#000000';

    const fontSize = this.cellSizeInPx - 2;
    this.gridContext.font = `${fontSize}px arial`;
    this.gridContext.textBaseline = 'top'
    this.gridContext.textAlign = 'center';

    this.grid.cells.flatMap(cell => cell).forEach(cell => {
      
      this.gridContext.beginPath();
      let x = (cell.location.column * this.cellSizeInPx);
      let y = (cell.location.row * this.cellSizeInPx);
      this.gridContext.rect(x, y, this.cellSizeInPx, this.cellSizeInPx);
      this.gridContext.stroke();

      let letter = cell.getLetter();
      if(letter) {
        this.gridContext.fillText(letter, x + (this.cellSizeInPx / 2), y + ((this.cellSizeInPx - fontSize) * 2));
      }
    });
  }
}
