import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToPastes, updateToPastes } from "../redux/pasteSlice";
import arrow from "../assets/arrow.png";

const ViewPaste = () => {
  const { id } = useParams();

  const allPastes = useSelector((state) => state.paste.pastes);

  const paste = allPastes.filter((p) => p._id === id)[0];

  return (
    <div>
      <div className=" flex flex-col justify-center items-center w-[100%]">
        <div className="flex flex-row gap-7 place-content-between justify-center w-[80%]">
          <input
            className=" border  rounded-sm mt-5 w-[85%]  outline-sky-950 text-base p-2"
            type="text"
            disabled
            placeholder="Title..."
            value={paste.title}
            onChange={(e) => setTitle(e.target.value)}
          />

          {/* <button className="p-2 rounded-2xl mt-2" onClick={createPaste}> */}
          {/* {/* {pasteId ? "Update Paste" : " Create My Paste"}  */}
          {/* </button> */}
        </div>
      </div>

      <div className="flex justify-center">
        <div
          className="mt-8 w-[80%] border flex 
justify-center flex-col"
        >
          <div className="flex justify-between">
            <div
              className="flex flex-row items-center 
justify-start pl-3 pt-3 gap-1"
            >
              <div
                className="h-4 w-4 border 
rounded-full bg-red-700"
              ></div>

              <div
                className="h-4 w-4 border rounded-full
bg-yellow-600"
              ></div>

              <div
                className="h-4 w-4 border rounded-full
bg-green-600"
              ></div>
            </div>

            <div
              className="w-6 mr-3 pt-3 
cursor-pointer"
            ></div>
            <a className="w-6 mt-3 mr-3" href="../pastes">
              <img src={arrow} alt="arrow" />
            </a>
          </div>
          <textarea
            className=" mt-3 w-[100%] p-4 border 
outline-none "
            placeholder="Write Your Content Here..."
            value={paste.content}
            disabled
            onChange={(e) => setValue(e.target.value)}
            rows={20}
          />
        </div>
      </div>
    </div>
  );
};

export default ViewPaste;
