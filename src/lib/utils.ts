import { goto } from "$app/navigation";

export const DEFAULT_URL = "/songbooks";
export const SONGBOOKS_PATH = "static/songbooks/";
export const ICON_MAP = {
  title: "🎵",
  song: "🎵",
  artist: "👨‍",
  bpm: "⏱️",
  key: "🎼",
  page: "📄",
  pages: "🗐",
  fileType: "🖻",
  info: "ℹ️",
  info2: "📝",
  songbook: "📘",
  // "songbook": "<FaBook />",
  songbooks: "📚",
  settings: "⚙️",
  edit: "✏️",
  delete: "🗑️",
  add: "➕",
  save: "💾",
  cancel: "❌",
  search: "🔍",
  hash: "#️",
};

export default ICON_MAP;

interface NavigateOptions {
  songbookName?: string;
  songId?: number;
  pageId?: number;
}

export async function navigate(options?: NavigateOptions): Promise<void> {
  if (!options) await goto(DEFAULT_URL);
  else {
    let url: string = "";
    if (options.songbookName) {
      url = `/songbooks/${options.songbookName}`;
    }
    if (options.songId) {
      const songPart: string = options.songId ? `/songs/${options.songId}` : "";
      url += songPart;
    }
    if (options.pageId) {
      const pagePart: string = options.pageId ? `?pageId=${options.pageId}` : "";
      url += pagePart;
    }
    await goto(url);
  }
}
