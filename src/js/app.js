import Game, { GameSavingData, loadGame as readGameSaving, saveGame as writeGameSaving} from './domain.js';

const game = new Game();
game.start();