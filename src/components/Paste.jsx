import React, { useState } from "react";
import { useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import toast from 'react-hot-toast';
import edit from '../assets/edit.png'
import eye from '../assets/eye.png'
import Delete from '../assets/delete.png'
import copy from '../assets/copy.png'
import share from '../assets/share.png'
import calender from '../assets/calender.png'
import fb from '../assets/facebook.png'
import insta from "../assets/instagram.png"
import tele from "../assets/telegram.png"
import twit from "../assets/twitter.png"
import whats from "../assets/whatsapp.png"
import { removeFromPastes } from "../redux/pasteSlice";



const Paste = () => {
  const pastes = useSelector((state) => state.paste.pastes);

  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState("");



  const filterData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleDelete(pasteId){
    dispatch(removeFromPastes(pasteId))
  }



  return (

    

    <div  className="flex flex-col justify-center w-[100%]">

             {/* <div className=" fixed z-1  flex flex-row gap-3 left-[74%] bg-slate-200 p-3 rounded-lg "> */}
                {/* <a href="#"><img className="w-9" src={whats} alt="" /></a> */}
                {/* <a href="#"><img className="w-9" src={insta} alt="" /></a> */}
                {/* <a href="#"><img className="w-9" src={fb} alt="" /></a> */}
                {/* <a href="#"><img className="w-9" src={tele} alt="" /></a> */}
                {/* <a href="#"><img className="w-9" src={twit} alt="" /></a> */}
               {/* </div> */}
      
      <div className="flex justify-center">
      <input
        className="p-2 min-w-[500px] mt-5 border rounded-sm w-[70%] outline-sky-900"
        type="search"
        placeholder="Search paste here..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      </div>

    <div className="w-[100%] flex justify-center">
      <div className="flex justify-center flex-col border w-[70%] mt-3">
        <div className="pl-3 p-2 flex flex-row w-[100%] border-b">
        <h1 className="font-bold text-lg">All Paste</h1>
        </div>
        

    <div className="w-[100%] flex justify-center">

      <div className="flex flex-col gap-5 justify-center items-center mt-4 mb-4 w-[95%]">
        {filterData.length > 0 &&
          filterData.map((paste) => {
            
            return (
              <div key={paste?._id} className=" flex flex-row border w-[100%] justify-between items-center ">
                <div className=" p-2 overflow-hidden h-14">
                <div className="font-bold text-xl">{paste.title}</div>

                <div className="text-xs">{paste.content}</div>
                </div>

                <div>
                <div className="flex flex-row gap-4 place-content-evenly pr-2" >
                    <button className="w-7 border p-1 "><a href={`/?pasteId=${paste?._id}`}> <img src={edit} alt="edit" /> </a></button>

                    <button  className="w-7 border p-1 "><a href={`/pastes/${paste?._id}`}> <img src={eye} alt="eye" /> </a></button>

                    <button  className="w-7 border p-1 " onClick={()=>handleDelete(paste?._id)}> <img src={Delete} alt="delete" /> </button>

                    <button  className="w-7 border p-1 " onClick={()=>{
                        navigator.clipboard.writeText(paste?.content)
                        toast.success("copied to clipboard")
                    }}> <img src={copy} alt="copy" /> </button>

                    <button  className="w-7 border p-1 ">
                      <img src={share} alt="share" />
                    </button>
                    </div>

                    <div className="flex flex-row w-[100%] justify-end items-center gap-2">
                      <img className="w-5 h-5 border" src={calender} alt="calender" />
                        {paste.createdAt.slice(0,10)}
                    </div>
                    </div>
              </div>
            );
          })}
      </div>
      </div>
      </div>
      </div>
    </div>
  );
};

export default Paste;
