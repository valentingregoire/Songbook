import { json } from "@sveltejs/kit";
import fs, { Dirent } from "fs";
import Song from "$models/song.model";

const SONGS_PATH = "static/songs/";
const SONG_INFO_FILE = "_info.json";

export async function GET(): Promise<Response> {
  const songMap: Map<string, Song> = new Map();
  const songNames: string[] = fs
    .readdirSync(SONGS_PATH, { withFileTypes: true })
    .filter((dirent: Dirent) => dirent.isDirectory())
    .map((dirent: Dirent) => dirent.name);
  songNames.forEach((fileName: string) => {
    let files: Dirent[] = fs
      .readdirSync(`${SONGS_PATH}/${fileName}`, { withFileTypes: true })
      .filter((item: Dirent) => !item.isDirectory() && !item.name.endsWith(".json"));
    const fileType: string = files.length > 0 ? files[0].name.split(".")[1] : "svg";
    let song: Song = new Song(fileName, fileType);
    if (fs.existsSync(`${SONGS_PATH}/${fileName}/${SONG_INFO_FILE}`)) {
      const songData = JSON.parse(
        fs.readFileSync(`${SONGS_PATH}/${fileName}/${SONG_INFO_FILE}`).toString()
      );
      for (const key in songData) {
        // song.setPropertyByName(key, songData[key]);
        (song as { [key: string]: any })[key] = songData[key];
      }
    }
    song.pages = files.filter((dirent: Dirent) => dirent.name.endsWith(song.fileType)).map((item: Dirent) => item.name);
    songMap.set(song.id, song);
  });
  return json(Object.fromEntries(songMap));
}
