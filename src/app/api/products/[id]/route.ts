import { PrismaClient } from '@prisma/client';
import { type NextRequest, NextResponse } from 'next/server';


const prisma = new PrismaClient()

interface Params {
    id: number|string
}

export async function GET(request: Request, { params }:{params:Params}) {
    const { id } = params
    const product = await prisma.product.findUnique({
        where:{
            id: parseInt(id)
        }
    })

    prisma.$disconnect()
    return NextResponse.json(product)
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

    prisma.$disconnect()
    return NextResponse.json(product)
}

export async function DELETE(request: NextRequest, { params }:{params:Params}) {
    let product;
    const { id } = params;

    try{
        product = await prisma.product.delete({
            where: {
                id: parseInt( id )
            }
        })
    } catch ( error ) {
        product = error
    } finally {
        prisma.$disconnect()
    }

    return NextResponse.json(product)
}

