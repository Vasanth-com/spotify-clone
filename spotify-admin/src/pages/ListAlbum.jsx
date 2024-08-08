import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { url } from '../App';
import { toast } from 'react-toastify';

const ListAlbum = () => {
  const[data,setData] = useState([]);

  const fetchAlbum = async()=>{
    try {
      const response = await axios.get(`${url}/api/album/list`)
      console.log(response.data);
      
      if(response.data.success){
        setData(response.data.album)
      }
    } catch (error) {
        toast.error("Error occurred")
    }
  }
  const removeAlbum = async(id)=>{
      try {
        const response = await axios.post(`${url}/api/album/remove`,{id})
        if(response.data.success){
          toast.success(response.data.message);
          fetchAlbum();
        }
      } catch (error) {
        toast.error('Error Occurred');
      }
  }

  useEffect(()=>{
    fetchAlbum();
  },[])
  return (
    <div>
      <p>All Albums List</p>
      <br />
      <div>
        <div className='sm:grid hidden grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5 bg-gray-100'>
          <p>Image</p>
          <p>Name</p>
          <p>Description</p>
          <p>Album Color</p>
          <p>Action</p>
        </div>
        {
          data?.map((item,idx)=>
            {
              return(
            <div key={idx} className='grid grid-cols-[1fr_1fr_1fr] sm:grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 border border-gray-300 text-sm mr-5' >
              <img className='w-12' src={item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.desc}</p>
              <input type="color" value={item.bgColor} />
              <p className='cursor-pointer' onClick={()=>removeAlbum(item._id)}>X</p>
            </div>
          )})
        }
      </div>
    </div>
  )
}

export default ListAlbum
