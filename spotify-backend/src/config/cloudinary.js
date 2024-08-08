import {v2 as cloudinary} from 'cloudinary'

const connectClodinary = async () =>{
    await cloudinary.config({
        cloud_name:"du8zarpet",
        api_key:'511428112827932',
        api_secret:'4cTSbEoVL9AiS_p1uIyLNso8sAQ'
    })
} 

export default connectClodinary