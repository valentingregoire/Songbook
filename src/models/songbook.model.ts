import type Song from "./song.model";

export type SongbookMap = {
  [key: string]: Songbook;
}

export default class Songbook {
  name: string;
  default: boolean = false;
  songs: (Song | string)[] = [];


  constructor(name: string, defaultSongbook: boolean, songs: string[]) {
    this.name = name;
    this.default = defaultSongbook;
    this.songs = songs;
  }
}
