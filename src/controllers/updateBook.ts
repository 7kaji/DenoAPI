import { updateBook, BookById } from "./../services/bookService.ts";

export default async ({
  params,
  request,
  response,
}: {
  params: { id: string };
  request: any;
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

  if (!request.hasBody) {
    response.status = 400;
    response.body = { message: "Invalid book data" };
    return;
  }

  const {
    value: { title, description, price }
  } = await request.body();

  if (!title || !description || !price) {
    response.status = 422;
    response.body = {
      message: "Incorrect book data. Title, Description and price are required",
    };
    return;
  }

  const valueEdit = { title, description, price };

  await updateBook(bookId, valueEdit);

  response.body = { message: "Book updated" };
};
