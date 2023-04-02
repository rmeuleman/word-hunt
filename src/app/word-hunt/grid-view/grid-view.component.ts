import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { allDirections, Direction } from '../direction';
import { Grid } from '../grid';
import { GridConfiguration } from '../grid-configuration';
import { GridConfigurationService } from '../grid-configuration.service';
import { GridGenerator } from '../grid-generator';
import { WordGenerator } from '../word-generator';
import { WordGeneratorService } from '../word-generator.service';

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.css']
})
export class GridViewComponent implements OnInit, AfterViewInit {
  gridGenerator: GridGenerator;

  grid: Grid;

  private cellSizeInPx: number;

  @ViewChild('gridCanvas', {static: false}) gridCanvas: ElementRef;

  gridContext: CanvasRenderingContext2D;

  constructor(
    private router: Router,
    private wordGeneratorService: WordGeneratorService,
    private gridConfigurationService: GridConfigurationService
  ) {}

  ngOnInit(): void {
    const gridConfiguration = this.gridConfigurationService.getGridConfiguration();
    if(gridConfiguration) {
      this.gridGenerator = new GridGenerator(this.wordGeneratorService.getWordGenerator(), gridConfiguration);
      this.generateGrid();
    } else {
      this.router.navigate(['/grid-configuration']);
    }
  }

  ngAfterViewInit(): void {
    if(this.grid) {
      this.cellSizeInPx = Math.min((800 / this.grid.size), 40);
      this.gridContext = this.gridCanvas.nativeElement.getContext('2d');
      this.gridContext.canvas.width = this.cellSizeInPx * this.grid.size;
      this.gridContext.canvas.height = this.cellSizeInPx * this.grid.size;  
      this.drawGrid();
    }
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

  private generateGrid() {
    this.grid = this.gridGenerator.generateGrid();
  }

  public regenerateGrid() {
    this.generateGrid();
    this.gridContext.clearRect(0, 0, this.gridContext.canvas.width, this.gridContext.canvas.width)
    this.drawGrid();
  }
}
