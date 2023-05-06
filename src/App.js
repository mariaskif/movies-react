import {Container} from 'react-bootstrap'
import { useState,useEffect } from 'react'
import React from 'react'
import Naving from './components/Naving';
import Headering from './components/Headering'
import Category from './components/Category';
import Cards from './components/Cards';
import {items} from './data'
import Cardcontent from './components/Cardcontent';
import axios from 'axios'
import Pagenation from './components/Pagenation';
import MoviesDetails from './components/MoviesDetails';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  const [movies,setdata]=useState([])
  const [pageCount,setPage]=useState([])

const getmovies=async()=>{
  const respons=await axios.get('https://api.themoviedb.org/3/movie/550?api_key=570ac04450b236945877a9fcfc9b22f7')
  setdata(respons.data)
  setPage(respons.data.total_page)

}
const getPage=async(page)=>{
  const respons=await axios.get(`https://api.themoviedb.org/3/movie/550?api_key=570ac04450b236945877a9fcfc9b22f7&language=en-US&page=${page}`)
  setdata(respons.data)
  setPage(respons.data.total_page)
}

  const search=async(word)=>{
    if(word===""){
      getmovies();
    }else{
    const respons=await axios.get(`https://api.themoviedb.org/3/movie/550?api_key=570ac04450b236945877a9fcfc9b22f7query=${word}&language=en`)
    setdata(respons.data)
    setPage(respons.data.total_page)

}
}
useEffect(()=>{
  getmovies();
  console.log(movies)

},[])


// const allcategory=['الكل',...new Set(items.map((i)=>i.category))]
// const filterbycategory=(cat)=>{
//   if(cat === 'الكل') {
//     setdata(items)
//   }
//   else{
//   const newdata= items.filter((item)=>item.category === cat)
//   setdata(newdata)}
// }
// const filterbysearch=(word)=>{
// if(word!== ""){
//   const newarr=items.filter((item)=>{
//     // item.title === word
//   })
//   setdata(newarr)
// }
// }

  return (
    <div className="color-body font">
    <Naving search={search} />
   <Container>
{/* <Headering/> */}
{/* <Category filterbycategory={filterbycategory} allcategory={allcategory} /> */}
  <BrowserRouter>
<Routes>
  <Route path="/" element={<Cardcontent movies={movies}  getPage={getPage} pageCount={pageCount}/>}/>
  <Route path="/movie/:id" element={ <MoviesDetails/>}/>
  </Routes>
  </BrowserRouter>
</Container>
    </div>
  );
}

export default App;
