export type SongMap = {
  [key: string]: Song;
}

export default class Song {
  id: number;
  title: string;
  fileType?: string;
  pages?: string[];
  artist?: string;
  bpm?: number;
  key?: string;
  info?: string;

  constructor(
    id: number,
    title: string,
    fileType?: string,
    pages?: string[],
    artist?: string,
    bpm?: number,
    key?: string,
    info?: string
  ) {
    this.id = id;
    this.title = title;
    this.fileType = fileType;
    this.pages = pages;
    this.artist = artist;
    this.bpm = bpm;
    this.key = key;
    this.info = info;
  }

  equals(song: Song): boolean {
    return song && this.id === song.id;
  }

  setPropertyByName(propertyName: string, value: any) {
    this[propertyName] = value;
  }
}
