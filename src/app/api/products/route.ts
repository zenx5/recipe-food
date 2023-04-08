import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { redirect } from 'next/dist/server/api-utils';

const prisma = new PrismaClient()


export async function GET(request: Request) {
    const products = await prisma.product.findMany()

    prisma.$disconnect()
    return NextResponse.json( products )
}

export async function POST(request:NextRequest) {
    const data = await request.json()
    const newProduct = await prisma.product.create({
        data
    })

    return NextResponse.json(newProduct)
    // return NextResponse.json(data)

}