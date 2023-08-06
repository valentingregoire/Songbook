import type { LayoutModel } from "$models/layout.model";
import ICON_MAP from "$lib/utils";

export async function load() {
  let layoutData: LayoutModel = {
    icon: "song",
    title: "Songs",
  };
  return layoutData;
}
