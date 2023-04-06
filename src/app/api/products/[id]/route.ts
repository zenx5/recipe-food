import { PrismaClient } from '@prisma/client';
import { type NextRequest, NextResponse } from 'next/server';


const prisma = new PrismaClient()

interface Params {
    id: number
}

export async function GET(request: Request, { params }:{params:Params}) {
    const { id } = params
    const product = await prisma.product.findUnique({
        where:{
            id: parseInt(id)
        }
    })
    console.log(product)

    return new Response( JSON.stringify(product) )
}

export async function PUT(request: NextRequest, { params }:{params:Params}) {
    const { id } = params;
    const data = await request.json()
    const product = await prisma.product.update({
        where: {
            id: parseInt(id)
        },
        data
    })
    


    return NextResponse.json(product)
}


