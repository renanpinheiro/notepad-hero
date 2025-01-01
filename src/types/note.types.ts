export interface NoteTag {
  id: number;
  name: string;
}

export interface NoteGroup {
  id: number;
  name: string;
}

export interface Note {
  id: number;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  group: NoteGroup;
  tags: NoteTag[];
  isFavorite: boolean;
}