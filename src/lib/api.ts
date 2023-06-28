import { error } from "@sveltejs/kit";
import type { Songbook } from "../models/songbook.model";

const BACK_END_URL = "http://localhost:3000";
export const SONGBOOKS_NAMESPACE = "/songbooks";

async function send(
  method: string = "GET",
  path: string,
  body?: Object
): Promise<any> {
  let options: any = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
  };
  if (body) {
    options.options["body"] = JSON.stringify(body);
  }
  const response = await fetch(`${BACK_END_URL}${path}`, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

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
