import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

// Read a prompt
export const GET = async (request, { params }) => {
  try {
    await connectToDB();
    const prompt = await Prompt.findById(params.id).populate("creator");

    if (!prompt) return new Response("Prompt Not Found", { status: 404 });
    return new Response(JSON.stringify(prompt), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all posts!", {
      status: 500,
      headers: {
        "Content-Type": "text/plain",
      },
    });
  }
};

// Edit a prompt
export const PATCH = async (request, { params }) => {
  const { prompt, tag } = await request.json();

  try {
    await connectToDB();

    const existingPrompt = await Prompt.findById(params.id);
    if (!prompt) return new Response("Prompt Not Found", { status: 404 });
    existingPrompt.prompt = prompt;
    existingPrompt.tag = tag;
    await existingPrompt.save();
    return new Response(JSON.stringify(existingPrompt), { status: 200 });
  } catch (error) {
    return new Response("Failed to update prompt", { status: 500 });
  }
};

// Delete a prompt
export const DELETE = async (response, { params }) => {
  try {
    await connectToDB();
    await Prompt.findByIdAndDelete(params.id);

    return new Response("Prompt deleted successfully!", { status: 200 });
  } catch (error) {
    return new Response("Failed to delete posts!", {
      status: 500,
      headers: {
        "Content-Type": "text/plain",
      },
    });
  }
};
