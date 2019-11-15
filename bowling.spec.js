// bowling.spec.js
import Game from './bowling';

let g;
beforeEach(() => { g = new Game()});

test('gutter game', () => {
    const pins = 0;
    const rolls = 20;
    rollMany(rolls, pins);

    expect(g.score()).toBe(0);
});

test('all ones', () => {
    for (let i = 0; i < 20; i += 1) {
        g.roll(1);
    }

    expect(g.score()).toBe(20);
});

function rollMany(rolls, pins) {
    for (let i = 0; i < rolls; i += 1) {
        g.roll(pins);
    }
}
