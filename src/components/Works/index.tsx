import { ChevronRightIcon } from "@heroicons/react/16/solid";
import { Link } from "react-router";

import { motion } from "framer-motion";
import Cards from "./Cards";
import { portfolioIndex } from "../../assets";

const index = () => {
  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.4 },
    },
  };
  return (
    <section className="bg-gray-200 pt-64 absolute top-0 w-full -z-10  ">
      <div className=" w-4/6 mx-auto text-center py-5 mb-28">
        <p className="mb-10 text-gray-600 inline-flex items-center justify-center gap-1 text-center text-base uppercase font-semibold ">
          <Link to="/" className="flex items-center hover:text-yellow-500">
            home <ChevronRightIcon className="w-5 h-5 inline" />
          </Link>
          portfolio
          <ChevronRightIcon className="w-5 h-5 inline-block" />
        </p>
        <h4 className="text-5xl capitalize font-medium leading-normal ">
          my portfolio
        </h4>
      </div>
      {/* portfolio info  */}

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={container}
        transition={{ duration: 0.5 }}
        className="px-10 sm:w-5/6 w-full py-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mx-auto"
      >
        {/* portfolio cards */}
        {portfolioIndex.map((item, i) => (
          <Cards
            key={i}
            image={item.image}
            link={item.link}
            stack={item.stack}
            title={item.title}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default index;
