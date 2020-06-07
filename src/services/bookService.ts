import bookModel from "../models/Book.ts";

const BookAll = async () => {
  return await bookModel.findAll();
};

const BookById = async (bookId: string) => {
  return await bookModel.findById(bookId);
};

const createBook = async (bookData: any) => {
  const newBook = {
    title: bookData.title,
    description: bookData.description,
    price: bookData.price,
  };

  await bookModel.create(newBook);

  return newBook;
};

const updateBook = async (bookId: string, bookData: any) => {
  const book = await BookById(bookId);

  if (Object.keys(book).length === 0 && book.constructor === Object) {
    throw new Error("Book not found");
  }

  const editBook = {
    id: bookId,
    title: bookData.title,
    description: bookData.description,
    price: bookData.price,
  };

  try {
    await bookModel.update(editBook);
  } catch(err) {
    return { message: 'Error: Book not updated!', error: err.message }
  }
};

const deleteBook = async (bookId: string) => {
  try {
    bookModel.destroy(bookId);
  } catch(err) {
    return { message: 'Error: Book not deleted!', error: err.message }
  }
};

export {
  BookAll,
  BookById,
  createBook,
  updateBook,
  deleteBook
};
