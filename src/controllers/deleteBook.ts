import { deleteBook, BookById } from "./../services/bookService.ts";

export default async ({
  params,
  response,
}: {
  params: { id: string };
  response: any;
}) => {
  const bookId = params.id;

  if (!bookId) {
    response.status = 400;
    response.body = { message: "Invalid book ID" };
    return;
  }

  const foundBook = await BookById(bookId);
  if (!foundBook) {
    response.status = 404;
    response.body = { message: `Book with ID ${bookId} not found` };
    return;
  }

  await deleteBook(bookId);

  response.body = { message: "Book deleted" };
};
