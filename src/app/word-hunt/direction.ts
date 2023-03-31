export const enum Direction {
  LEFT, 
  RIGHT,
  UP,
  DOWN


}

export function allDirections() : Direction[] {
    return [Direction.UP, Direction.RIGHT, Direction.DOWN, Direction.LEFT];
}