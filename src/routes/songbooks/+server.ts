import { json } from "@sveltejs/kit";
import fs from "fs";
import type { Songbook } from "../../models/songbook.model";

const SONGBOOKS_PATH = "static/songbooks/";

export async function POST({ request }) {
  const requestJson = await request.json();
  console.log("json", requestJson);
  const name: string = requestJson.name;
  return json(name.toUpperCase());
}

export async function PUT() {
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
    console.log(songbook);
  });
  return json(songbooks);
}