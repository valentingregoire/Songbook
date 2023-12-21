import { json } from "@sveltejs/kit";
import fs from "fs";
import { SONGBOOKS_PATH } from "$lib/utils";
import type Songbook from "$models/songbook.model";

export async function GET(): Promise<Response> {
  const songbookMap: Map<string, Songbook> = new Map();
  const songbookNames = fs.readdirSync(SONGBOOKS_PATH);
  songbookNames.forEach((fileName: string) => {
    const songbook: Songbook = JSON.parse(
      fs.readFileSync(`${SONGBOOKS_PATH}/${fileName}`).toString()
    ) as Songbook;
    songbookMap.set(songbook.name, songbook);
  });
  return json(Object.fromEntries(songbookMap));
}
