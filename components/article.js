import React, { useState } from "react";
import Image from "next/image";
import { BsBookmark, BsFillBookmarkCheckFill } from "react-icons/bs";

export default function article({ img, title, description, link }) {
  const [saved, setSaved] = useState(false);
  const handleClick = () => {
    setSaved(!saved);
  };

  return (
    <div
      className="shadow justify-center items-start m-3 mx-16 p-2 border-2 border-custom-blue rounded-lg text-custom-blue"
    >
      <div className="text-left text-xl font-semibold">{title}</div>
      <div className="text-left">{description}</div>
      <div className="flex justify-between items-center">
        <div className="cursor-pointer flex items-center text-sm" onClick={handleClick}>
          {saved ? <BsFillBookmarkCheckFill /> : <BsBookmark />}
        </div>
        <div className="text-xs italic my-2">
          <a
            className="text-custom-yellow bg-custom-blue rounded-full px-4 py-2"
            target="_blank"
            href={link}
          >
            Source
          </a>
        </div>
      </div>
    </div>
  );
}
