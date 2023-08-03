import { json } from "@sveltejs/kit";
import fs from "fs";
import type Songbook from "$models/songbook.model";

const SONGBOOKS_PATH = "static/songbooks/";

export async function GET() {
  let songbooks: Array<Songbook> = [];
  const songbookNames = fs.readdirSync(SONGBOOKS_PATH);
  songbookNames.forEach((songbookName: string) => {
    const songbook = JSON.parse(
      fs.readFileSync(`${SONGBOOKS_PATH}/${songbookName}`).toString()
    );
    songbooks.push(songbook);
  });
  return json(songbooks);
}
