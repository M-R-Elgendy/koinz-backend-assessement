import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Book } from '@prisma/client';


@Injectable()
export class RecommendService {
  constructor(private prisma: PrismaService) { }

  private calculateReadPages(book: any) {

    let pages = [];
    for (const interval of book.intervals) {
      for (let i = interval.start_page; i <= interval.end_page; i++) {
        pages.push(i);
      }
    }

    return [...new Set(pages)].length;
  }

  async recomment() {
    const books = await this.prisma.book.findMany({
      include: {
        intervals: true
      }
    });

    let sortedBooks = [];
    for (const book of books) {
      sortedBooks.push({
        book_id: book.id,
        book_name: book.title,
        author: book.author,
        num_of_read_pages: this.calculateReadPages(book)
      });
    }

    sortedBooks = sortedBooks.sort((a, b) => b.num_of_read_pages - a.num_of_read_pages);
    return sortedBooks;
  }
}
