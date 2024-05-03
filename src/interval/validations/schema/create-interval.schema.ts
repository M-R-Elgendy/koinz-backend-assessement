import * as Joi from 'joi';
import { PrismaService } from '../../../prisma/prisma.service';

const prismaService = new PrismaService();

async function validateUserId(user_id: number) {
    const user = await prismaService.user.findUnique({
        where: { id: user_id }
    });

    if (!user) {
        throw new Error('User not found');
    }
}

async function validateBookId(book_id: number) {
    const book = await prismaService.book.findUnique({
        where: { id: book_id }
    });

    if (!book) {
        throw new Error('Book not found');
    }
}

export const intervalSchema = Joi.object({
    user_id: Joi.number().required().external(validateUserId),
    book_id: Joi.number().required().external(validateBookId),
    start_page: Joi.number().min(1).required(),
    end_page: Joi.number().min(1).required()
});