import prisma from '@/lib/prisma'
import { User } from '@prisma/client'
import { getServerSession } from 'next-auth'
import { NextRequest, NextResponse } from 'next/server'


export async function POST(req: NextRequest) {
    const session = await getServerSession()

    if (!session?.user) {
        return NextResponse.json({ message: 'User not authenticated' }, { status: 401 })
    }

    try {
        const body = await req.json()
        const { productId, quantity } = body

        if (!productId || !quantity) {
            return NextResponse.json({ message: 'productId and quantity are compulsory' }, { status: 409 })
        }

        const existingProduct = await prisma.product.findUnique({ where: { id: productId } })

        if (!existingProduct) {
            return NextResponse.json({ message: 'Product not found' }, { status: 404 })
        }

        const existingCartItem = await prisma.cartItem.findFirst({
            where: {
                userId: (session.user as User)?.id,
                productId: productId
            }
        })

        if (existingCartItem) {
            await prisma.cartItem.update({
                where: { id: existingCartItem.id },
                data: { quantity: existingCartItem.quantity + quantity }
            })
        } else {
            await prisma.cartItem.create({
                data: {
                    user: { connect: { id: (session.user as User)?.id, } },
                    product: { connect: { id: productId } },
                    quantity
                }
            })
        }

        return NextResponse.json({ message: 'Product added to cart successfully' }, { status: 201 })
    } catch (error) {
        console.error(error)
        return NextResponse.json({ message: 'Something went wrong' }, { status: 500 })
    }
}

export async function GET(req: NextRequest) {
    const session = await getServerSession()

    if (!session?.user) {
        return NextResponse.json({ message: 'User not authenticated' }, { status: 401 })
    }

    try {
        const cartItems = await prisma.cartItem.findMany({
            where: {
                userId: (session.user as User)?.id,
            },
            include: {
                product: true
            }
        })

        return NextResponse.json({ cartItems })
    } catch (error) {
        console.error(error)
        return NextResponse.json({ message: 'Something went wrong' }, { status: 500 })
    }
}
