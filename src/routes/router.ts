import { Router } from "https://deno.land/x/oak/mod.ts";

import getAllBooks from "../controllers/getAllBooks.ts";
import getBookDetails from "../controllers/getBookDetails.ts";
import createBook from "../controllers/createBook.ts";
import updateBook from "../controllers/updateBook.ts";
import deleteBook from "../controllers/deleteBook.ts";

const router = new Router();

router
  .get("/api/books", getAllBooks)
  .get("/api/books/:id", getBookDetails)
  .post("/api/books", createBook)
  .put("/api/books/:id", updateBook)
  .delete("/api/books/:id", deleteBook);

router.get("/", (context) => {
  context.response.body = "Hello Api Deno!";
});

export default router;
