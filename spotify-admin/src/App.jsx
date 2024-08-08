import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import AddSong from './pages/AddSong'
import AddAlbum from './pages/AddAlbum'
import ListSong from './pages/ListSong'
import ListAlbum from './pages/ListAlbum'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
export const url = 'http://localhost:4000'

const App = () => {
  return (
    <div className='flex items-start min-h-screen'>
      <ToastContainer />
      <Sidebar/>
      <div className='flex-1 h-screen overflow-y-scroll bg-[#f3fff7]'>
        <Navbar/>
      <div className='pt-8 pl-5 sm:pt-12 sm:pl-12'>
          <Routes>
            <Route path='/add-song' element={<AddSong/>}></Route>
            <Route path='/add-album' element={<AddAlbum/>}></Route>
            <Route path='/list-song' element={<ListSong/>}></Route>
            <Route path='/list-album' element={<ListAlbum/>}></Route>
          </Routes>
      </div>
      </div>
    </div>
  )
}

export default App
