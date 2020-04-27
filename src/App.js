/* 
Start here and then work through the 
PostsContainer components and the CommentSection Components. 
Not all files need code added. 
Look at each file to see where you need to pass props or add code 
*/
import React, { useState } from 'react';
import './App.css';
// WE IMPORT THE POSTSPAGE AND SEARCHBAR PAGES INTO THIS FILE
import PostsPage from './components/PostsContainer/PostsPage';
import SearchBar from './components/SearchBar/SearchBarContainer';
// ALSO IMPORT THE DUMMY DATA
import dummydata from './dummy-data';

const text = document.getElementsByClassName('social');
const div = document.createElement('div');
div.classList.add('title');
text.appendChild = div;



// CREATE OUR COMPONENT
const App = () => {
  // THIS SETS OUR DATE INITIAL STATE GETTIN DATA FROM DUMMY DATA

  const [data, setData] = useState(dummydata);
  return (
    <div className='App'>
      {/* HERE WE IMPORT THE SEARCHBAR COMPONENT FROM THE SEARCHBAR FILE */}
      <SearchBar text={text.textContent} />
      {/* HERE WE IMPORT THE POSTPAGE COMPONENT WHILE INPUTTING DUMMYDATA */}
      <PostsPage data={data} setData={setData} />
    </div>
  );
};
// HERE WE EXPORT OUR COMPONENT TO THE INDEX FILE
export default App;