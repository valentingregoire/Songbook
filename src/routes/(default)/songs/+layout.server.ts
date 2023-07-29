import type { LayoutModel } from "$models/layout.model";
import ICON_MAP from "$lib/utils";

export async function load() {
  let layoutData: LayoutModel = {
    title: `${ICON_MAP.song} Songs`,
    back_url: "/songbooks"
  };
  return layoutData;
}
