export function selectBook(book){
    //selectbook is an action creatorthat needs to return an action,
    //an object witha type proprty
  return {
     type: 'BOOK_SELECTED',
     payload: book
  }
}