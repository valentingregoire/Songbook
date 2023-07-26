import type { LayoutModel } from "$models/layout.model";
import { page } from "$app/stores";

export async function load() {
  let songbookName: string = "Songbook";
  page.subscribe(($page) => songbookName = $page.params.name);
  const layoutData: LayoutModel = {
    title: songbookName,
    back_url: "/songbooks"
  };
  return layoutData;
}