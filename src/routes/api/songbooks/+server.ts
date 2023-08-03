import { json } from "@sveltejs/kit";
import fs from "fs";
import type { SongbookMap } from "$models/songbook.model";
import { SONGBOOKS_PATH } from "$lib/utils";


export async function GET(): Promise<Response> {
  let songbooks: SongbookMap = {};
  const songbookNames = fs.readdirSync(SONGBOOKS_PATH);
  songbookNames.forEach((songbookName: string) => {
    songbooks[songbookName.split(".")[0]] = JSON.parse(
      fs.readFileSync(`${SONGBOOKS_PATH}/${songbookName}`).toString()
    );
  });
  return json(songbooks);
}
