import { json } from "@sveltejs/kit";
import fs from "fs";
import { SONGBOOKS_PATH } from "$lib/utils";
import type Songbook from "$models/songbook.model";

export async function GET(): Promise<Response> {
  const songbookMap: Map<string, Songbook> = new Map();
  const songbookNames = fs.readdirSync(SONGBOOKS_PATH);
  songbookNames.forEach((songbookName: string) => {
    songbookMap.set(
      songbookName.split(".")[0],
      JSON.parse(
        fs.readFileSync(`${SONGBOOKS_PATH}/${songbookName}`).toString()
      ) as Songbook
    );
  });
  return json(Object.fromEntries(songbookMap));
}
