import { useState } from "react";
import Image from "next/image";
import { FiSearch } from "react-icons/fi";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { MdOutlineVisibility } from "react-icons/md";
import { BiComment } from "react-icons/bi";
import { FiShare2 } from "react-icons/fi";
import { Numeral } from "react-numeral";
import { motion } from "framer-motion";
import { deviceWidth } from "../constants";

export default function DiscussionForum({ screenSize, discussionData }) {
  const [likes, setLikes] = useState([1]);

  // Set favorite
  const handleLikes = (id) => {
    console.log("id", id);
    if (likes.includes(id)) {
      setLikes(likes.filter((like) => like !== id));
    } else {
      setLikes((prevLikes) => [...new Set(prevLikes), id]);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: { duration: 2, type: "spring" },
        once: screenSize <= deviceWidth.md ? true : false,
      }}
    >
      <h2 className="hidden md:block text-red-400 font-medium text-xl px-4 md:pl-6 py-3">
        DISCUSSION FORUM
      </h2>

      <div className="px-1 lg:px-4 pl-[1.6rem] md:pl-[2rem] lg:pl-[3.5rem] pb-5">
        <h5 className="font-medium text-[1rem] lg:text-lg mt-4 lg:mt-0 mb-1 lg:mb-2">
          Filters
        </h5>
        <div className="bg-white flex justify-between items-center py-4 px-1 sm:px-2 md:px-3 lg:px-6 rounded-md shadow shadow-gray-400 drop-shadow-xl mb-4">
          <button className="rounded-[5rem] w-fit px-1 sm:px-6 md:px-3 bg-red-700 text-white text-[.7rem] sm:text-[.8rem] md:text-[.8rem] lg:text-[.85rem] py-[.3rem] font-medium">
            Sector 1
          </button>
          <button className="rounded-[5rem] w-fit px-1 sm:px-6 md:px-3 bg-blue-800 text-white text-[.7rem] sm:text-[.85rem] md:text-[.8rem] lg:text-[.85rem] py-[.3rem] font-medium">
            Sector 2
          </button>
          <button className="rounded-[5rem] w-fit px-1 sm:px-6 md:px-3 bg-yellow-500 text-white text-[.7rem] sm:text-[.85rem] md:text-[.8rem] lg:text-[.85rem] py-[.3rem] font-medium">
            Sector 3
          </button>

          <div className="w-[35%] sm:w-[40%] lg:w-[43%] rounded-[5rem] flex items-center bg-white lg:bg-zinc-200 border border-gray-400 shadow px-1 py-[.32rem] pl-2 text-gray-600">
            <FiSearch className="text-[.95rem] lg:text-[1rem]" />
            <input
              type="text"
              placeholder="Search here"
              className="w-[90%] lg:ml-1 text-[.9rem] lg:text-[1rem] outline-none bg-transparent text-black"
            />
          </div>
        </div>

        <div className="max-h-screen overflow-y-auto sm-scrollbar pr-1 sm:pr-2">
          {discussionData?.map((data, index) => (
            <div
              key={data.id}
              className="relative mb-8 bg-white shadow shadow-gray-400 drop-shadow-xl rounded-md pt-[.1rem] pb-[1rem]"
            >
              <p className="absolute text-blue-400 right-2 sm:right-4 top-2 sm:top-4 text-[.75rem] sm:text-sm cursor-pointer font-medium">
                {data.createdAt} ago
              </p>
              {index === 0 && (
                <div className="flex justify-center pt-[1.5rem] sm:pt-[3rem]">
                  <div className="relative w-[80%] sm:w-[60%] md:w-[70%] h-[6rem] sm:h-[7rem] lg:h-[7rem]">
                    <Image
                      src="/images/infobeam3.jpg"
                      fill
                      className="object-contain"
                      alt="Infobeam"
                    />
                  </div>
                </div>
              )}

              <div className="flex justify-between gap-x-1 px-1 sm:px-2 lg:px-4 mt-5 lg:mt-4">
                <div className="w-[2.5rem] sm:w-[3rem] h-[2.5rem] sm:h-[3rem] relative">
                  <Image
                    fill
                    className="rounded-full object-cover"
                    src={data.profileImg}
                    alt="user"
                  />
                </div>

                <div className="flex-1 pt-2">
                  <div className="flex items-center">
                    <h5 className="font-medium text-gray-600 text-[.8rem] sm:text-[.9rem] mr-2 sm:mr-6">
                      Lorem Ipsum
                    </h5>
                    <button
                      className="rounded-[5rem] px-2 sm:px-3 md:px-4 text-white text-[.75rem] sm:text-[.8rem] lg:text-[.85rem] py-[0.2rem] font-medium"
                      style={{ backgroundColor: data.color }}
                    >
                      Sector 1
                    </button>
                  </div>
                  <p className="text-gray-600 font-medium text-[.8rem] sm:text-[.9rem] mt-3 lg:mt-6">
                    {data.text} ago
                  </p>

                  <div className="flex justify-between gap-x-2 sm:gap-x-0 mt-4 lg:mt-8">
                    <button
                      className="flex items-center gap-x-1"
                      onClick={() => handleLikes(data.id)}
                    >
                      {likes.includes(data.id) ? (
                        <AiFillHeart className="text-red-600 md:text-2xl" />
                      ) : (
                        <AiOutlineHeart className="text-gray-600 md:text-2xl" />
                      )}
                      <h6 className="text-[.6rem] sm:text-[.8rem] lg:text-[.9rem] font-medium text-gray-600">
                        <Numeral value={data.likes} format="0a" />
                      </h6>
                    </button>
                    <button className="flex items-center gap-x-1">
                      <MdOutlineVisibility className="text-gray-600 md:text-2xl" />
                      <h6 className="text-[.6rem] sm:text-[.8rem] lg:text-[.9rem] font-medium text-gray-600">
                        <Numeral value={data.views} format="0a" /> Views
                      </h6>
                    </button>
                    <button className="flex items-center gap-x-1">
                      <BiComment className="text-gray-600 text-[.75rem] lg:text-2xl" />
                      <h6 className="text-[.6rem] sm:text-[.8rem] md:text-[.9rem] font-medium text-gray-600">
                        <Numeral value={data.comments} format="0a" /> Comments
                      </h6>
                    </button>
                    <button className="flex items-center gap-x-1">
                      <FiShare2 className="text-gray-600 text-[.75rem] lg:text-2xl" />
                      <h6 className="text-[.6rem] sm:text-[.8rem] md:text-[.9rem] font-medium text-gray-600">
                        Share
                      </h6>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
