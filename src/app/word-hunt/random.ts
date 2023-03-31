export function pickRandomItem<T>(array: T[]) : T 
{
  if(array.length == 0) {
    throw new Error('array is empty');
  }
  return array[Math.floor((Math.random() * array.length))];
}

export function getRandomNumber(min: number, max:number) : number
{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}