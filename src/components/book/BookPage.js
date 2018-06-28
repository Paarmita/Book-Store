
import React from 'react';
import { connect } from 'react-redux';
import Nav    from '../Navigation/nav';
import {createBook} from '../../actions/bookActions';
import { bindActionCreators } from 'redux';

class Book extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      title: ''
    }

    console.log(this);
  }

  handleChange(event){
      this.setState({
        title: event.target.value
      });
  }

  handleClick(){
    console.log('called')
    this.props.createBook(this.state.title);
  }

  render(){

    let _book_data;

    if(this.props.books.BookReducer.length >= 0){
        _book_data = this.props.books.BookReducer.map((book, i) => <li key={i}>{book}</li> );
    }
    else
    {
      _book_data = ''
    }

    return(

      <div>
        <Nav />
        <div className = "container">
          <h4>Add Books</h4>
            <ul>
                {_book_data}
            </ul>

            <div>
                <div className="form-group">
                  <label htmlFor="email">Book Name: </label>
                  <input className = "form-control" type="text" name="title" value = {this.state.title} onChange = {(e) => {this.handleChange(e)}} />
                </div>
                 <button className = 'btn btn-default' onClick = {(e)=> {this.handleClick(e)}}> SUBMIT </button>
            </div>  
         </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {

  console.log('data',state);
  return {
    books: state
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({createBook}, dispatch);
}


// Use connect to put them together
export default connect(mapStateToProps, mapDispatchToProps)(Book);
