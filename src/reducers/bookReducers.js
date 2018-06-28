

const i_state = {
  book: ['divyanshu']
}

const BookReducer = (state = i_state, action) => {
  switch (action.type){
    // Check if action dispatched is CREATE_BOOK and act on that
    case 'CREATE_BOOK':

        console.log(state);
        // state.push(action.book);
        // Reducers must be pure functions, which means they can't mutate data.
        // console.log([...i_state.book, action.book]);

        return [...state, action.book];

        // console.log(state.book.concat(action.book));
        // return new_array;
    default:
          return state;
  }
};


export default BookReducer;