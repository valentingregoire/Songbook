import { json } from "@sveltejs/kit";
import fs from "fs";
import type { Settings, SettingsMap } from "$models/settings.model";
import { SettingsType } from "$models/settings.model";

export async function GET() {
  const defaultSettings: Settings = JSON.parse(
    fs.readFileSync("static/settings/default.json").toString()
  );
  const userSettings: Settings = JSON.parse(
    fs.readFileSync("static/settings/user.json").toString()
  );

  const settingsMap: SettingsMap = {
    [SettingsType.Default]: defaultSettings,
    [SettingsType.User]: userSettings
  }

  return json(settingsMap);
}