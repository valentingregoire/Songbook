export default class Song {
  id: string;
  fileType: string;
  title: string;
  pages?: string[] = [];
  artist?: string;
  bpm?: number;
  key?: string;
  info?: string;

  constructor(
    id: string,
    fileType: string
  ) {
    this.id = id;
    this.fileType = fileType;
    this.title = id;
  }
}
