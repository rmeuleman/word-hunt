import { allDirections, Direction } from "./direction";
import { Grid } from "./grid";

/**
 * Représente la configuration d'une grille
 */
export class GridConfiguration {

  /**
   * 
   * @param gridSize la taille de la grille
   * @param minWordLength la taille minimum des mots qui seront insérés dans la grille
   * @param maxWordLength la taille maximum des mots qui seront insérés dans la grille
   * @param wordDirections les directions dans lesquelles les mots seront insérés
   * @param secretWord le mot secret (optionnel)
   */
  constructor(
    public gridSize: number = 20,
    public minWordLength: number = 4,
    public maxWordLength: number = 8,
    public wordDirections: Direction[] = allDirections(),
    public secretWord?: string
  ) 
  {

  }


}