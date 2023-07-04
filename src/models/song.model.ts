export type SongMap = {
  [key: string]: Song;
}

export default class Song {
  title: string;
  fileType?: string;
  pages?: string[];
  artist?: string;
  bpm?: number;
  key?: string;
  info?: string;

  constructor(
    title: string,
    fileType: string,
    pages?: string[],
    artist?: string,
    bpm?: number,
    key?: string,
    info?: string
  ) {
    this.title = title;
    this.fileType = fileType;
    this.pages = pages;
    this.artist = artist;
    this.bpm = bpm;
    this.key = key;
    this.info = info;
  }

  setPropertyByName(propertyName: string, value: any) {
    this[propertyName] = value;
  }
}
