import type { Level } from './game.types';
import type { Note } from './note.types';

export interface User {
  name: string;
  level: Level;
  coins: number;
  notes: Note[];
}
