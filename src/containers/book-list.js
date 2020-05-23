import React, { Component} from 'react';
import { connect} from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';

 class BookList extends Component {
    renderList(){
        return this.props.books.map((book)=>{
             return (
                 <li 
                 key={book.title} 
                 onClick={()=> this.props.selectBook(book)}
                 className="list-group-item">
                 {book.title}
                 </li>
             )
        })
    }
    render() {
        return(
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state){
    // Whatever gets returned shows as props inside booklist
    return {
        books: state.books
    };
}

// Anything returned fromthis function ends up as props on the booklist container
function mapDispatchToProps(dispatch){
    // bindActionCretors passes the result of the selectBook action creator to the reducers
    return bindActionCreators({ selectBook: selectBook}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);