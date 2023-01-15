import Image from "next/image";
import { React, useState, useRef } from "react";
import { HiOutlineVideoCamera } from "react-icons/hi";
import { IoMdPhotos } from "react-icons/io";
import { BsEmojiSmile } from "react-icons/bs";
import { useSession } from "next-auth/react";
import { RiDeleteBin6Line } from "react-icons/ri";
import axios from "axios";
// import { addPost, selectPost } from "../public/src/features/postSlice";
import { useDispatch, useSelector } from "react-redux";

const CreatePost = ()=>{
const { data: session, status } = useSession();
    
    return (
<div className="bg-white rounded-md shadow-md text-gray-500 p-2 divide-y">
      <div className="flex p-4 space-x-2 items-center">
        <Image
          src={session?.user.image}
          height={40}
          width={40}
          className="rounded-full cursor-pointer"
        />
        <form className="flex flex-1">
          <input
            className="rounded-full h-12 flex-grow focus:outline-none font-medium bg-gray-100 px-4"
            type="text"
            ref={inputRef} 
            placeholder={`What's on your mind, ${session?.user.name}?`}></input>
          <button hidden onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
      {imageToPost && (
        <div
          onClick={removeImage}
          className="flex items-center px-4 py-2 space-x-4 filter hover:brightness-110 transition duration-150 cursor-pointer">
          <img src={imageToPost} className="h-10 object-contain" />
          <RiDeleteBin6Line className="h-8 hover:text-red-500" />
        </div>
      )}
      <div className="flex justify-evenly py-2">
        <div className="flex items-center p-1 space-x-1 flex-grow justify-center hover:cursor-pointer hover:bg-gray-100 rounded-md">
          <HiOutlineVideoCamera className="text-red-500" size={20} />
          <p className="font-semibold text-gray-600">Live Video</p>
        </div>
        <div
          onClick={handleClick}
          className="flex items-center p-1 space-x-1 flex-grow justify-center hover:cursor-pointer hover:bg-gray-100 rounded-md">
          <IoMdPhotos className="text-green-500" size={20} />
          <p className="font-semibold text-gray-600">Photo/Video</p>
          <input
            ref={hiddenFileInput}
            onChange={addImageToPost}
            type="file"
            accept="image/*"
            hidden
          />
        </div>
        <div className="flex items-center p-1 space-x-1 flex-grow justify-center hover:cursor-pointer hover:bg-gray-100 rounded-md">
          <BsEmojiSmile className="text-yellow-400" size={20} />
          <p className="font-semibold text-gray-600">Feeling/Activity</p>
        </div>
      </div>
    </div>
    );
}


export default CreatePost;