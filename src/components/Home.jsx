import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToPastes, updateToPastes } from "../redux/pasteSlice";
import copy from "../assets/copy.jpg";
import toast from "react-hot-toast";

const Home = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId");

  const dispatch = useDispatch();

  const allPastes = useSelector((state) => state.paste.pastes);

  useEffect(() => {
    if (pasteId) {
      const paste = allPastes.find((p) => p._id === pasteId);
      setTitle(paste.title);
      setValue(paste.content);
    }
  }, [pasteId]);

  function copyTextArea() {
    if (value === "") {
      toast.error("You can't copy blank space");
    } else {
      navigator.clipboard.writeText(value);
      toast.success("copied to clipboard");
    }
  }

  function createPaste() {
    const paste = {
      title: title,

      content: value,

      _id: pasteId || Date.now().toString(36),

      createdAt: new Date().toISOString(),
    };

    if (value === "" || title === "") {
      toast.error("Please Write Something To save");
    } else {
      if (pasteId) {
        //update
        dispatch(updateToPastes(paste));
      } else {
        //create
        dispatch(addToPastes(paste));
      }

      //after creattion or updation
      setTitle("");
      setValue("");
      setSearchParams({});
    }
  }

  return (
    <div className=" flex flex-col justify-center items-center w-[100%]">
      <div className="flex flex-row gap-7 place-content-between w-[80%] ">
        <input
          className=" border  rounded-sm mt-5 w-[85%]  outline-sky-950 text-base p-2 "
          type="text"
          placeholder="Title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <button
          className="rounded-md mt-5 bg-sky-800 w-[15%] text-white text-base p-2 hover:bg-sky-500"
          onClick={createPaste}
        >
          {pasteId ? "Update Paste" : " Create My Paste"}
        </button>
      </div>

      <div className="mt-8 w-[80%] border flex justify-center flex-col">
        <div className="flex justify-between">
          <div className="flex flex-row items-center justify-start pl-3 pt-3 gap-1">
            <div className="h-4 w-4 border rounded-full bg-red-700"></div>

            <div
              className="h-4 w-4 border rounded-full
bg-yellow-600"
            ></div>

            <div
              className="h-4 w-4 border rounded-full
bg-green-600"
            ></div>
          </div>

          <div className="w-6 mr-3 pt-3 cursor-pointer" onClick={copyTextArea}>
            <img src={copy} alt="image" />
          </div>
        </div>
        <textarea
          className=" mt-3 w-[100%] p-4 border outline-none "
          value={value}
          placeholder="Write Your Content Here..."
          onChange={(e) => setValue(e.target.value)}
          rows={20}
        />
      </div>
    </div>
  );
};

export default Home;
