import { createBook } from "./../services/bookService.ts";

export default async ({
  request,
  response,
}: {
  request: any;
  response: any;
}) => {
  if (!request.hasBody) {
    response.status = 400;
    response.body = { message: "Invalid book data" };
    return;
  }

  const {
    value: { title, description, price },
  } = await request.body();

  if (!title || !description || !price) {
    response.status = 422;
    response.body = {
      message: "Incorrect book data. Title, Description and price are required",
    };
    return;
  }

  const book = await createBook({ title, description, price });

  response.body = { 
    message: "Book created", 
    data: book 
  };
};
