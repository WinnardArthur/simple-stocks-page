import Image from "next/image";
import { motion } from "framer-motion";
import { deviceWidth } from "../constants";

const marketStoryVariants = {
  initial: {
    opacity: 0,
    scale: 0,
  },

  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      type: "spring",
      staggerChildren: 0.5,
    },
  },
};

export default function MarketStories({ screenSize, marketStories }) {
  return (
    <div>
      <h2 className="hidden md:block text-red-400 font-medium text-xl py-3 mb-[2.2rem]">
        MARKET STORIES
      </h2>

      <div className="grid lg:grid-cols-2 justify-center gap-x-8 mt-[1.5rem] lg:mt-0">
        {marketStories?.map((story) => (
          <motion.div
            variants={marketStoryVariants}
            initial="initial"
            animate={screenSize <= deviceWidth.md ? "" : "animate"}
            whileInView={screenSize <= deviceWidth.md ? "animate" : ""}
            viewport={{ once: false, amount: 0.5 }}
            key={story.id}
          >
            <div
              variants={marketStoryVariants}
              className="relative w-[17rem] h-[12rem] sm:w-[22rem] sm:h-[15rem] md:w-[17rem] md:h-[12rem] lg:w-[14rem] lg:h-[8rem] xl:w-[17rem] xl:h-[12rem] mb-6"
              key={story.id}
            >
              <Image
                fill
                src={story.img}
                alt="Story"
                className="rounded-lg brightness-[90%]"
              />
              <p className="text-white absolute text-[.92rem] sm:text-base md:text-[.92rem] lg:text-[.8rem] xl:text-[.92rem] leading-5 lg:leading-4 xl:leading-5 font-medium bottom-0 bg-[rgba(0,0,0,.5)] rounded-xl py-3 sm:py-4 md:py-3 lg:py-[.5rem] xl:py-3 px-8 lg:px-[1rem] xl:px-8 pr-14">
                {story.text}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
