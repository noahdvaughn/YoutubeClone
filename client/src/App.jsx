import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Box} from "@mui/material"
import Navbar from './components/Navbar'
import Feed from './components/Feed'
import VideoDetail from './components/VideoDetail'
import ChannelDetail from './components/ChannelDetail'
import Search from './components/Search'
import { useState, useContext, createContext } from 'react'
import SearchFeed from './components/SearchFeed'
export const ColorContext = createContext() 

function App() {

  return (
    <BrowserRouter>
      <Box sx={{backgroundColor: 'black'}}>
        <Navbar/>
      </Box>
      <Routes>
        <Route path='/' element={<Feed/>}/>
        <Route path='/video/:id' element={<VideoDetail/>}/>
        <Route path='/channel/:id' element={<ChannelDetail/>}/>
        <Route path='/search/:searchTerm' element={<SearchFeed/>}/>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
