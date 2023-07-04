import type Song from "./song.model";

export default class Songbook {
  name: string;
  default: boolean = false;
  songs: Song[] = [];


  constructor(name: string, defaultSongbook?: boolean, songs?: Song[]) {
    this.name = name;
    if (defaultSongbook) this.default = defaultSongbook;
    if (songs) this.songs = songs;
  }
}
