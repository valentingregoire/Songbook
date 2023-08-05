import type { LayoutModel } from "$models/layout.model";
import ICON_MAP from "$lib/utils";

export async function load() {
  const layoutData: LayoutModel = {
    title: `${ICON_MAP.songbooks} Songbooks`,
  };
  return layoutData;
}
