import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const GET = async (request) => {
    const url = new URL(request.url);
    const searchParams = url.searchParams;
    const search = searchParams.get('search') || '';
    const regex = new RegExp(search, "i");
    try {
        await connectToDB()

        const prompts = await Prompt.find({prompt: {$regex: regex}}).populate('creator')

        const headers = {
            'Content-Type': 'application/json',
            'Cache-Control': 'no-store, no-cache, must-revalidate',
            Expires: '0',
            Pragma: 'no-cache'
        };

        return new Response(JSON.stringify(prompts), { status: 200, headers })
    } catch (error) {
        return new Response("Fallo al obtener todos los prompts", { status: 500 })
    }
} 