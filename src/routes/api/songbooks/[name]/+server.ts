import fs from "fs";
import type Songbook from "$models/songbook.model";
import { SONGBOOKS_PATH } from "$lib/utils";
import { json } from "@sveltejs/kit";

export async function POST(requestEvent: Request) {
  const songbookName = requestEvent.params.name;
  const { request } = requestEvent;
  const songbook: Songbook = await request.json();

  console.log("request", JSON.stringify(request, null, 2));
  console.log("songbook", JSON.stringify(songbook, null, 2));

  fs.writeFileSync(
    `${SONGBOOKS_PATH}/${songbookName}.json`,
    JSON.stringify(songbook, null, 2)
  );

  return json(songbook);
}
