import { error } from "@sveltejs/kit";
import type { Songbook } from "../models/songbook.model";

// const BACK_END_URL = "http://localhost:3000";
export const SONGBOOKS_NAMESPACE = "/api/songbooks";

async function send(
  method: string = "GET",
  path: string,
  body?: Object
): Promise<any> {
  let options: any = {
    method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };
  if (body) {
    options["body"] = JSON.stringify(body);
  }
  const response = await fetch(path, options);

  if (response.ok) {
    return response.json();
  }

  throw error(response.status);
}

export function get(path: string): Promise<any> {
  return send("GET", path);
}

export function post(path: string, body: Songbook): Promise<any> {
  return send("POST", path, body);
}
