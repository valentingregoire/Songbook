import type { LayoutModel } from "$models/layout.model";
import ICON_MAP from "$lib/utils";

export async function load() {
  const layoutData: LayoutModel = {
    icon: ICON_MAP.settings,
    title: "Settings",
  };
  return layoutData;
}
