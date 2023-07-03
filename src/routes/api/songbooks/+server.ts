import { json } from "@sveltejs/kit";
import fs from "fs";
import type { Songbook } from "../../../models/songbook.model";

const SONGBOOKS_PATH = "static/songbooks/";

export async function POST({ request }) {
  console.log(typeof request);
  const name = await request.json();
  return json(name.toUpperCase());
}

export async function GET() {
  let songbooks: Songbook[] = [];
  const songbookNames = fs
    .readdirSync(SONGBOOKS_PATH, { withFileTypes: true })
    .filter((item) => !item.isDirectory())
    .map((item) => item.name.split(".")[0]);
  songbookNames.forEach((songbookName: string) => {
    const songbook = JSON.parse(
      fs.readFileSync(`${SONGBOOKS_PATH}/${songbookName}.json`).toString()
    );
    songbooks.push(songbook);
  });
  return json(songbooks);
}
