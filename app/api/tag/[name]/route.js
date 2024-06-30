import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const GET = async (request, { params }) => {
  try {
    await connectToDB();
    const prompts = await Prompt.find({
      tag: params.name,
    }).populate("creator");

    if (!prompts) return new Response("Prompts Not Found", { status: 404 });
    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all posts!", {
      status: 500,
      headers: {
        "Content-Type": "text/plain",
      },
    });
  }
};
