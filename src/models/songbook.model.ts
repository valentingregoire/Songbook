import type Song from "./song.model";

export default class Songbook {
  name: string;
  default: boolean = false;
  songs: string[] = [];
  songObjects: Song[] = [];
  tags: string[] = [];

  constructor(name: string, defaultSongbook: boolean = false, songs: string[] = []) {
    this.name = name;
    this.default = defaultSongbook;
    this.songs = songs;
  }
}
