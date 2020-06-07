import { BookAll } from "./../services/bookService.ts";

export default async ({ response }: { response: any }) => {
  const books = await BookAll();
  response.body = books.rows;
};
