import { ChevronRightIcon } from "@heroicons/react/16/solid";
import { Link } from "react-router";
import { serviceIndex } from "../../assets";
import { motion } from "framer-motion";

const index = () => {
  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.4 },
    },
  };
  const childVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section className="bg-gray-200 py-64 absolute top-0  w-full -z-10">
      <div className=" w-4/6 mx-auto text-center py-5 mb-28">
        <p className="mb-10 text-gray-600 inline-flex items-center justify-center gap-1 text-center text-2xl uppercase font-semibold ">
          <Link to="/" className="flex items-center hover:text-yellow-500">
            home <ChevronRightIcon className="w-10 h-10 inline" />
          </Link>
          service 
        </p>
        <h4 className="text-5xl capitalize font-medium leading-normal ">
          what do i do
        </h4>
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={container}
        transition={{ duration: 0.5 }}
        className="px-10 grid lg:grid-cols-3 gap-10 w-5/6 mx-auto"
      >
        {serviceIndex.map((item, i) => {
          return (
            <motion.div
              variants={childVariant}
              transition={{ duration: 0.5 }}
              key={i}
              className="transition-all duration-300   group hover:bg-yellow-300 hover:text-white bg-white text-center  px-7 py-12 shadow-md rounded"
            >
              <div className=" w-40 h-40 mx-auto">
                <img src={item.image} alt={item.title} />
              </div>
              <h4 className=" transition-colors duration-200 group-hover:text-white text-2xl font-bold mt-5 text-yellow-400 uppercase ">
                {item.title}
              </h4>
              <p className="transition-colors duration-200 group-hover:text-gray-800 mt-6 w-5/6 leading-relaxed font-medium text-gray-500 mx-auto">
                {item.description}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default index;
