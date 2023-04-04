import { Direction } from "../direction";

export class DirectionOption {
  constructor(
    public direction: Direction,
    public label: string,
    public checked: boolean  
  ) {}
}