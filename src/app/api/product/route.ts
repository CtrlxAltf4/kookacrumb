import prisma from "@/lib/prisma"
import { getServerSession } from "next-auth"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
    const session = await getServerSession()

    if(!session?.user) {
      return NextResponse.json({message: 'User not authenticated'},{status: 401})
    }
    try{
        const body = await req.json()
        const {name, description, price, images} = body
        
        if(!name){
            return NextResponse.json({ message: 'product name compulsory'}, {status: 409})
        }

        const existingProductByName = await prisma?.product?.findUnique({where: {name: name}})

        if(existingProductByName){
            return NextResponse.json({ message: 'this product already exist'}, {status: 409})
        }

        const newProduct = await prisma?.product?.create({
            data: {
                name,
                description,
                price: parseInt(price),
                images: {
                    create: images.map(url => ({ url }))
                  }
            }
        })

        return NextResponse.json({product: newProduct, message: 'Product created successfully'},{status: 201})
    } catch(error){
        return NextResponse.json({message: 'Something went wrong!!'},{status: 500})
    }
}

export async function GET(req: NextRequest) {
    const id = req?.nextUrl?.searchParams?.get('id')
    if(id){
        try {
            const product = await prisma.product.findUnique({
                where: {
                    id: Number(id)
                }
            });

            if (!product) {
                return NextResponse.json({ message: 'Product not found' }, { status: 404 });
            }

            return NextResponse.json(product, { status: 200 });
        } catch(e){
            return NextResponse.json({message: 'Something went wrong'},{status: 500})
        }
    } else {
        try {
            const products = await prisma.product.findMany();
            return NextResponse.json(products,{status: 200})
        } catch (error) {
            return NextResponse.json({message: 'Something went wrong'},{status: 500})
    
        }
    }
}
