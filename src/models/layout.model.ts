export interface LayoutModel {
  title: string;
  back_url?: string;
}

export enum Direction {
  Previous = "PREVIOUS",
  Next = "NEXT",
}

export enum Subject {
  Song = "SONG",
  Page = "PAGE",
}
