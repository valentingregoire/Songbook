export class Song {
  title: string;
  pages: number = 1;
  fileType: string = "svg";
  artist?: string;
  bpm?: number;
  key?: string;
  info?: string;

  constructor(
    title: string,
    pages: number,
    fileType: string = "svg",
    artist?: string,
    bpm?: number,
    key?: string,
    info?: string
  ) {
    this.title = title;
    this.pages = pages;
    this.fileType = fileType;
    this.artist = artist;
    this.bpm = bpm;
    this.key = key;
    this.info = info;
  }
}

export class Songbook {
  name: string;
  default: boolean = false;
  songs: Song[] = [];


  constructor(name: string, defaultSongbook?: boolean, songs?: Song[]) {
    this.name = name;
    if (defaultSongbook) this.default = defaultSongbook;
    if (songs) this.songs = songs;
  }
}
