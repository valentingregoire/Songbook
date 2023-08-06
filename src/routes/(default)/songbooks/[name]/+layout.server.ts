import type { LayoutModel } from "$models/layout.model";

export async function load({ params }) {
  let layoutData: LayoutModel = {
    icon: "songbook",
    title: params.name,
    back_url: "/songbooks",
  };
  return layoutData;
}
