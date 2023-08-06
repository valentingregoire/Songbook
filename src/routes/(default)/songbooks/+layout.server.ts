import type { LayoutModel } from "$models/layout.model";

export async function load() {
  const layoutData: LayoutModel = {
    icon: "songbooks",
    title: "Songbooks",
  };
  return layoutData;
}
