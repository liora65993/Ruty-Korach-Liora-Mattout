import { Book } from "./Book"

export function BookList( {title, emptyListMessage, list}){

     return (
        <>
             <h1>{title}</h1>
                {list.length > 0 ? <ul>
                {list.map((book,i) =><Book book={book} index={i}></Book>)}
            </ul> :     
            <p>{emptyListMessage}</p>}
      </>
          )
    

          }
