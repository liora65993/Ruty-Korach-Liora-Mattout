export function Book( {book, index}){

  return <>
    <li>
                     <p>Title:{book.title}</p> 
                     <p>Auther:{book.auther}</p> 
                     <p>Likes:{book.likes}</p> 
                     <p>Num:{index+1}</p> 
                     
     {
           book.likes>100&& <p>Recommend📕📖</p>
     }
     {
           !book.isAvailable && <p> not available❌</p>
     }
                  <br></br>
                  <br></br> 
   </li>
   </>

}