import { groq } from "next-sanity";
import { client } from "./lib/client";
export async function getPost(){
  return client.fetch(
    groq`*[_type == "post"]{
        _id,
        title,
        body
    }`, {
      next: {
        revalidate: 10
      }
    }
  );
}