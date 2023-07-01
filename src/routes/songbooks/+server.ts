import { json } from "@sveltejs/kit";

export async function POST({ request }) {
  console.log("type", typeof request);
  const requestJson = await request.json();
  console.log("json", requestJson);
  const name: string = requestJson.name;
  return json(name.toUpperCase());
}
