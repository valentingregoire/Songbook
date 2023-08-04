import { json } from "@sveltejs/kit";
import fs from "fs";
import type { Settings } from "$models/settings.model";
import { SettingsType } from "$models/settings.model";

export async function GET(): Promise<Response> {
  const defaultSettings: Settings = JSON.parse(
    fs.readFileSync("static/settings/default.json").toString()
  );
  const userSettings: Settings = JSON.parse(
    fs.readFileSync("static/settings/user.json").toString()
  );

  const settingsMap: Map<SettingsType, Settings> = new Map();
  settingsMap.set(SettingsType.Default, defaultSettings);
  settingsMap.set(SettingsType.User, userSettings);

  return json(Object.fromEntries(settingsMap));
}