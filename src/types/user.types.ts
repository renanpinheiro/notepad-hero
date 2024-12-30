import type { Note } from "./note.types";

export interface User {
  name: string;
  level: number;
  coins: number;
  notes: Note[];  
}