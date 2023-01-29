import Game from '../Game';

test('should create new object class Game', () => {
  const expected = {
    srcImg: 'goblin.png',
    fieldSize: 4,
  };

  const result = new Game('goblin.png', 4);
  expect(result).toEqual(expected);
});

test('should return number less then max', () => {
  const max = 2;
  const game = new Game('goblin.png', 4);
  const result = game.getRandom(max);
  expect(result).toBeLessThan(max);
});
