import React from 'react'
import Navbar from './Navbar'
import AlbumItem from './AlbumItem' 
import SongItem from './SongItem'
import { useContext } from 'react'
import { PlayerContext } from '../context/PlayerContext'

const DisplayHome = () => {

    const {songsData,albumsData} = useContext(PlayerContext);
  return (
    <>
        <Navbar/>
        <div className='mb-4'>
            <h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>
            <div className='flex overflow-auto'>

            {
                albumsData?.map((item,idx)=>(
                    <AlbumItem key={idx} image={item.image} id={item._id} desc={item.desc} name={item.name}/>
                ))
            }
            </div>
        </div>
        <div className='mb-4'>
            <h1 className='my-5 font-bold text-2xl'>Today's biggest hits</h1>
            <div className='flex overflow-auto'>
                {songsData?.map((item,idx)=>(
                    <SongItem key={idx} image={item.image} id={item.id} desc={item.desc} name={item.name}/>
                ))}
            </div>
        </div>
    </>
  )
}

export default DisplayHome
