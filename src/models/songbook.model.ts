import type Song from "./song.model";

export default class Songbook {
  name: string;
  default: boolean = false;
  songs: string[] = [];
  songObjects?: Song[] = [];

  constructor(name: string, defaultSongbook: boolean, songs: string[]) {
    this.name = name;
    this.default = defaultSongbook;
    this.songs = songs;
  }
}
