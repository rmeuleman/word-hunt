import { Injectable } from '@angular/core';
import { Grid } from './grid';
import { GridConfiguration } from './grid-configuration';

@Injectable()
export class GridConfigurationService {
  private gridConfiguration: GridConfiguration | undefined;

  constructor() { }

  public setGridConfiguration(gridConfiguration: GridConfiguration) {
    this.gridConfiguration = gridConfiguration;
  }

  public getGridConfiguration(): GridConfiguration | undefined {
    return this.gridConfiguration;
  }
}
