import { json } from "@sveltejs/kit";

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
  console.log(typeof request);
  const name = await request.json();
  return json(name.toUpperCase());
}