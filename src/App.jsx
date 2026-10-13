import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { Book } from './components/Book'
import { BookList } from './components/bookList'


function App() {
 
 const books =[{ title:'🏝️The freedom🏖️', auther:'Ruty k', likes: 10000000, isAvailable:true},
  { title:'⚔️The victory⚔️', auther:'liora', likes: 90, isAvailable:true},
  { title:'✈️The vocation🧳', auther:'Ruty k', likes: 10000, isAvailable:false}
 ]

  const popularBooks=books.filter((book)=>book.likes>100)
  return (
    <>
        <BookList title="Books store" emptyListMessage="no books available" list={books}></BookList>
        <BookList title="Recommend books" emptyListMessage="no popular books" list={popularBooks}></BookList>
    </>
  )
}

export default App
