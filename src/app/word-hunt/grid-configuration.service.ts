import { Injectable } from '@angular/core';
import { GridConfiguration } from './grid-configuration';

@Injectable()
export class GridConfigurationService {
  private gridConfiguration: GridConfiguration | undefined;

  constructor() 
  { 
    // charger la config de grille
    const gridConfigurationJSON = localStorage.getItem("gridConfiguration")
    if(gridConfigurationJSON) {
      this.gridConfiguration = JSON.parse(gridConfigurationJSON);
    }
  }

  public setGridConfiguration(gridConfiguration: GridConfiguration) {
    this.gridConfiguration = gridConfiguration;
    
    // sauvegarde la config de grille
    localStorage.setItem("gridConfiguration", JSON.stringify(gridConfiguration));
  }

  public getGridConfiguration(): GridConfiguration | undefined {
    return this.gridConfiguration;
  }
}
