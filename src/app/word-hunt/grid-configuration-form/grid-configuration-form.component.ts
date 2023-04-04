import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { allDirections, Direction } from '../direction';
import { Grid } from '../grid';
import { GridConfiguration } from '../grid-configuration';
import { GridConfigurationService } from '../grid-configuration.service';
import { DirectionOption } from './direction-option';

@Component({
  selector: 'app-grid-configuration-form',
  templateUrl: './grid-configuration-form.component.html',
  styleUrls: ['./grid-configuration-form.component.css']
})
export class GridConfigurationFormComponent implements OnInit {

  gridConfiguration: GridConfiguration;

  // directions: [Direction, boolean][] = [
  //   [Direction.UP, true],
  //   [Direction.RIGHT, true],
  //   [Direction.DOWN, false],
  //   [Direction.LEFT, false],
  // ];

  directionOptions: DirectionOption[] = [
    new DirectionOption(Direction.RIGHT, 'Vertical', true),
    new DirectionOption(Direction.DOWN, 'Horizontal', true),
    new DirectionOption(Direction.UP, 'Horizontal inversé', true),
    new DirectionOption(Direction.LEFT, 'Vertical inversé', true),
    new DirectionOption(Direction.RIGHT_DOWN, 'Diagonal bas-droite', true),
    new DirectionOption(Direction.UP_RIGHT, 'Diagonal haut-droite', true),
    new DirectionOption(Direction.LEFT_UP, 'Diagonal bas-droite inversé', true),
    new DirectionOption(Direction.RIGHT_DOWN, 'Diagonal haut-droite inversé', true),
  ];
  
  constructor(
    private router: Router,
    private gridConfigurationService: GridConfigurationService
  ) {}

  ngOnInit() {
    this.gridConfiguration = new GridConfiguration();
  }

  onSubmit() {
    this.gridConfiguration.wordDirections = this.directionOptions.filter(directionOption => directionOption.checked).map(directionOption => directionOption.direction);

    this.gridConfigurationService.setGridConfiguration(this.gridConfiguration);
    this.router.navigate(['/grid-view']);
  }

  public isDisabledDirectionOption(directionOption: DirectionOption) : boolean {
    return this.directionOptions.filter(directionOption => directionOption.checked).length <= 1 && directionOption.checked;
  }  
}
