

export const createBook = (Book) => {
  return {
    type: 'CREATE_BOOK',
    book:  Book
  }
};

/*

you can also write the same !!!

export const createBook = (Book) => ({
    type: 'CREATE_BOOK',
    book:  Book
});

*/