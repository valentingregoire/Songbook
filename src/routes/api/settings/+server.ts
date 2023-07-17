import { json } from "@sveltejs/kit";
import fs from "fs";

export async function GET() {
  const settings: Settings = JSON.parse(
    fs.readFileSync("static/settings/default.json").toString()
  );
  return json(settings);
}