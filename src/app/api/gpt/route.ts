import { Configuration, OpenAIApi } from 'openai'
import { NextResponse } from 'next/server';


const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
})
const openai = new OpenAIApi( config )





export async function POST(request: Request) {
    const body = await request.json()
    try{
        const { data } = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [
                { role:'user', content: body.prompt }
            ],
            temperature: 0.2,
        })
        return NextResponse.json(data)
    }catch( error ){
        return NextResponse.json(error)
    }
}

