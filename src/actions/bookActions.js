export const createBook = (book) => {

  return {
    // Unique identifier
    type: 'CREATE_BOOK',
    // Payload
    book: book
  }
};