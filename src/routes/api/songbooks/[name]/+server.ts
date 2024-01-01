import fs from "fs";
import type Songbook from "$models/songbook.model";
import { SONGBOOKS_PATH } from "$lib/utils";
import { json, type RequestEvent } from "@sveltejs/kit";

// export async function POST(requestEvent: Request): Promise<Response> {
//   const songbookName = requestEvent.params.name;
//   const { request } = requestEvent;
//   const songbook: Songbook = await request.json();
//
//   delete songbook.songObjects;
//   fs.writeFileSync(
//     `${SONGBOOKS_PATH}/${songbookName}.json`,
//     JSON.stringify(songbook, null, 2)
//   );
//
//   return json(songbook);
// }

export async function POST(requestEvent: {params: {name: string}, request: Request}): Promise<Response> {
  console.log("posting")
  console.log("requestEvent", requestEvent)
  const songbookName = requestEvent.params.name;
  const songbook: Songbook = await requestEvent.request.json();
  console.log("posted", songbook);
  delete songbook.songObjects;
  fs.writeFileSync(
    `${SONGBOOKS_PATH}/${songbookName}.json`,
    JSON.stringify(songbook, null, 2)
  );

  return json(songbook);
}
