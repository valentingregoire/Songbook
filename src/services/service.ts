import { get, post, SONGBOOKS_NAMESPACE } from "../lib/api";
import type { Songbook } from "$models/songbook.model";

export function getSongbooks() {
  return get(`${SONGBOOKS_NAMESPACE}`);
}

export function getSongbook(name: string) {
  return get(`${SONGBOOKS_NAMESPACE}/${name}`);
}

export function saveSongbook(name: string, songbook: Songbook) {
  return post(`${SONGBOOKS_NAMESPACE}/${name}`, songbook);
}
