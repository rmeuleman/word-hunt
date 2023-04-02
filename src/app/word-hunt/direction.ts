export const enum Direction {
  UP,
  RIGHT,
  DOWN,
  LEFT
}

export function allDirections() : Direction[] {
    return [Direction.UP, Direction.RIGHT, Direction.DOWN, Direction.LEFT];
}

export function fromDirectionName(name: string): Direction {
  switch(name) {
    case 'UP':
      return Direction.UP;
    case 'RIGHT':
      return Direction.RIGHT;
    case 'DOWN':
      return Direction.DOWN;
    case 'LEFT':
      return Direction.LEFT;
    default:
      throw new Error(`invalid direction name: ${name}`);
  }
}