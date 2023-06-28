export class Song {
  title: string;
  artist?: string;
  pages: number = 1;
  fileType: string = "svg";

  constructor(
    title: string,
    artist?: string,
    pages?: number,
    fileType?: string
  ) {
    this.title = title;
    this.artist = artist;
    if (pages) this.pages = pages;
    if (fileType) this.fileType = fileType;
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
