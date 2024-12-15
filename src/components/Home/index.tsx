/* eslint-disable react-hooks/rules-of-hooks */
import { ArrowSmallRightIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { image } from "../../assets";

const index = () => {
  const naviagte = useNavigate();
  return (
    <section className="fixed w-full flex flex-col sm:flex-row items-center justify-center text-black sm:top-0 md:bottom-0 sm:-z-50 h-screen z-50">
      {/* hero details  */}
   
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -100 },
          visible: { opacity: 1, x: 0 },
        }}
        className="lg:w-1/2  w-full  z-10  py-5  text-center lg:text-left sm:text-right mx-auto  md:h-screen h-[40vh]  bg-white md:px-40 md:py-60 
    "
      >
        <span className="text-yellow-300  w-full text-left uppercase text-xl mb-2 sm:text-2xl lg:text-xl font-bold">
          ux & ui, frontend devloper
        </span>
        <h1 className="sm:mt-5 sm:my-10 my-3 capitalize text-5xl font-extrabold  sm:leading-snug sm:text-7xl lg:text-[55px]">
          {" "}
          i'm ridwan <br className="hidden md:block" /> adebayo
        </h1>
        <div className="flex text-center flex-col md:flex-row w-full items-start gap-5">
          <button
            onClick={() => {
              naviagte("/about");
              scrollTo(0, 0);
            }}
            className="flex justify-center rounded  cursor-pointer md:px-16 py-4  shadow-md whitespace-nowrap items-center gap-6 uppercase font-bold md:py-5 bg-yellow-400 text-center w-5/6 mx-auto mt-4 text-white text-xl"
          >
            {" "}
            more about me <ArrowSmallRightIcon className="w-6 text-lg h-6" />
          </button>
          <button
            onClick={() => {
              naviagte("/contact");
              scrollTo(0, 0);
            }}
            className="flex shadow-md w-5/6 mx-auto mt-4 justify-center py-4 mb-5 rounded px-14  whitespace-nowrap items-center gap-6 uppercase font-bold md:py-5 text-yellow-400 cursor-pointer bg-white text-xl"
          >
            {" "}
            hire me <ArrowSmallRightIcon className="w-6 text-lg h-6" />
          </button>
        </div>
      </motion.div>

      {/* hero pics  */}
      <div className="md:w-1/2 overflow-hidden sm:hidden lg:block w-full border md:h-screen h-[70vh] bg-yellow-300 ">
        <div className="overflow-hidden">
          <Fade arrows={false}>
            <div className="z-50">
              <img src={image.Image1} />
            </div>
            <div>
              <img src={image.Image2} />
            </div>
            <div>
              <img src={image.Image3} />
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default index;
