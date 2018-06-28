

const BookReducer = (state = [], action) => {
  switch (action.type){
    // Check if action dispatched is CREATE_BOOK and act on that
    case 'CREATE_BOOK':
        // state.push(action.book);
        // Reducers must be pure functions, which means they can't mutate data
        return [
          ...state,
          Object.assign({}, action.book)
        ];
    default:
          return state;
  }
};


export default BookReducer;