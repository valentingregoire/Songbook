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
    fileType?: string,
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

  equals(song: Song): boolean {
    return (
      song &&
      this.title === song.title &&
      this.fileType === song.fileType &&
      this.pages === song.pages &&
      this.artist === song.artist &&
      this.bpm === song.bpm &&
      this.key === song.key &&
      this.info === song.info
    );
  }

  setPropertyByName(propertyName: string, value: any) {
    console.log("setting property by name", propertyName, value);
    this[propertyName] = value;
  }
}
