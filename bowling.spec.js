// bowling.spec.js
import Game from './bowling';

let g;
beforeEach(() => { g = new Game()});

test('gutter game', () => {
    for (let i = 0; i < 20; i += 1) {
        g.roll(0);
    }

    expect(g.score()).toBe(0);
});

test('all ones', () => {
    for (let i = 0; i < 20; i += 1) {
        g.roll(1);
    }

    expect(g.score()).toBe(20);
});
