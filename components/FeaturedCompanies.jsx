import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const featuredCompaniesVariants = {
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

export default function FeaturedCompanies({ imagesData }) {
  return (
    <div>
      <h2 className="hidden sm:block text-red-400 bg-zinc-100 font-medium text-xl px-4 py-2">
        FEATURED COMPANIES
      </h2>

      <div className="bg-slate-200">
        <motion.div
          variants={featuredCompaniesVariants}
          initial="initial"
          animate="animate"
          className="flex justify-between gap-x-4 px-4 py-2 md:py-6 overflow-x-scroll featured_companies no-scrollbar"
        >
          {imagesData?.map((item) => {
            return (
              <motion.div variants={featuredCompaniesVariants} key={item.id}>
                <div className="rounded-full md:rounded-none border-2 border-red-500 md:border-none relative w-[3.5rem] h-[3.5rem] md:w-[7rem] md:h-[3rem] flex gap-x-4">
                  <Image
                    fill
                    key={item.id}
                    src={item.path}
                    alt={item.alt}
                    className="object-cover rounded-full md:rounded-none"
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}

export async function getStaticProps() {}
