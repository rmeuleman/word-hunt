export const enum Direction {
  UP = 'UP',
  UP_RIGHT= 'UP-RIGHT',
  RIGHT = 'RIGHT',
  RIGHT_DOWN = 'RIGHT-DOWN',
  DOWN = 'DOWN',
  DOWN_LEFT = 'DOWN-LEFT',
  LEFT = 'LEFT',
  LEFT_UP = 'LEFT-UP'

}

export function allDirections() : Direction[] {
    return [
      Direction.UP,
      Direction.UP_RIGHT,
      Direction.RIGHT,
      Direction.RIGHT_DOWN,
      Direction.DOWN,
      Direction.DOWN_LEFT,
      Direction.LEFT,
      Direction.LEFT_UP];
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