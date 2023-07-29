import { goto } from "$app/navigation";

export const ICON_MAP = {
  "title": "🎵",
  "song": "🎵",
  "artist": "👨‍",
  "bpm": "⏱️",
  "key": "🎼",
  "page": "📄",
  "pages": "🗐",
  "fileType": "🖻",
  "info": "ℹ️",
  "info2": "📝",
  "songbook": "📘",
  // "songbook": "<FaBook />",
  "songbooks": "📚",
  "settings": "⚙️",
  "edit": "✏️",
  "delete": "🗑️",
  "add": "➕",
  "save": "💾",
  "cancel": "❌",
  "search": "🔍",
  "hash": "#️"
};

export default ICON_MAP;

interface NavigateOptions {
  songbookName?: string;
  songId?: number;
  pageId?: number;
}

export async function navigate(options?: NavigateOptions): Promise<void> {
  if (!options)
    await goto("/home");
  else {
    let url = "";
    if (options.songbookName) {
      url = `/songbooks/${options.songbookName}`;
    }
    if (options.songId) {
      url += `/songs/${options.songId}?pageId=${options.pageId || 0}`;
    }
    await goto(url);
  }
}