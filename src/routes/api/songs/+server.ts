import { json } from "@sveltejs/kit";
import type Dirent from "fs";
import fs from "fs";
import type SongMap from "../../../models/song.model";
import Song from "../../../models/song.model";

const SONGS_PATH = "static/songs/";

export async function GET() {
  let songs: SongMap = {};
  const songNames: Dirent[] = fs
    .readdirSync(SONGS_PATH, { withFileTypes: true })
    .filter(item => item.isDirectory())
    .map(item => item.name);
  songNames.forEach((songName: string) => {
    let files: Dirent[] = fs
      .readdirSync(`${SONGS_PATH}/${songName}`, { withFileTypes: true })
      .filter(item => !item.isDirectory() && !item.name.endsWith(".json"));
    const fileType: string = files.length > 0 ? files[0].name.split(".")[1] : "svg";
    let song: Song = new Song(songName, fileType);
    if (fs.existsSync(`${SONGS_PATH}/${songName}/_info.json`)) {
      const songData = JSON.parse(
        fs.readFileSync(`${SONGS_PATH}/${songName}/_info.json`).toString()
      );
      for (const key in songData) {
        song.setPropertyByName(key, songData[key]);
      }
    }
    song.pages = files.filter(item => item.name.endsWith(song.fileType)).map(item => item.name);
    songs[songName] = song;
  });
  return json(songs);
}
