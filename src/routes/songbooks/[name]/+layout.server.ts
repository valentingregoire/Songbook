import type { LayoutModel } from "$models/layout.model";

export async function load() {
  const layoutData: LayoutModel = {
    title: "Songbooks",
    back_url: "/songbooks",
  };
  return layoutData;
}