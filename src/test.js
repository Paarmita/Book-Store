import React from 'react';
import ReactDOM from 'react-dom';
import hello from './hello';
import Book from './components/book/BookPage';
import BookReducer from './reducers/bookReducers';
import * as actions from './actions/bookActions';

describe('hello', () => {
	it('should output hello',() => {
		expect(hello()).toEqual('hello');
	})
});


describe('Book', () => {
	it('renders without crashing', () => {
	  const div = document.createElement('div');
	  ReactDOM.render(<Book />, div);
	})
});


describe('Book Reducer', () => {

  it('should return the initial state', () => {
    expect(BookReducer(undefined, {})).toEqual({"book": [""]});
  });

  it('should handle CREATE_BOOK', () => {
  	const startAction = {
  		type:actions.CREATE_BOOK
  	};
  	expect(BookReducer({}, startAction)).toEqual({});
  });
});
