import { ChevronRightIcon } from "@heroicons/react/16/solid";
import { Link } from "react-router";
import { aboutIndex, skillIndex } from "../../assets";
import { motion } from "framer-motion";
import Card from "./Card";
import Skills from "./Skills";

const index = () => {
  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.4 },
    },
  };

  return (
    <section className="bg-gray-200 py-64 absolute top-0  w-full -z-10">
      <div className=" w-4/6 mx-auto text-center py-5 mb-28">
        <p className="mb-10 text-gray-600 inline-flex items-center justify-center gap-1 text-center text-base uppercase font-semibold ">
          <Link to="/" className="flex items-center hover:text-yellow-500">
            home <ChevronRightIcon className="w-5 h-5 inline" />
          </Link>
          about me <ChevronRightIcon className="w-5 h-5 inline-block" />
        </p>
        <h4 className="text-5xl capitalize font-medium leading-normal ">
          {" "}
          about me
        </h4>
      </div>
      {/* about info  */}

      <div className="flex flex-col lg:flex-row items-start justify-between gap-5 w-5/6 mx-auto">
        {/* about card work done */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={container}
          transition={{ duration: 5 }}
          className="lg:w-1/2 w-full p-5 grid sm:grid-cols-2 gap-5"
        >
          {aboutIndex.map((item, i) => (
            <Card key={i} label={item.label} index={item.index} />
          ))}
        </motion.div>
        {/* about info*/}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="lg:w-1/2 w-full p-5"
        >
          <span className="text-yellow-500 text-2xl font-bold uppercase">
            {" "}
            about me{" "}
          </span>
          <h2 className="mb-5 capitalize text-3xl md:text-[50px]  font-normal  leading-snug text-left">
            A UI/UX Designer & Web Developer Based in Niegria
          </h2>
          <p className="font-medium text-xl text-gray-400 leading-10 w-11/12 ">
            {" "}
            I value detail and functionality, as seen in my focus on responsive
            designs and interactive components.{" "}
          </p>
          <div className="flex flex-col lg:flex-row mt-20 px-2 items-start md:gap-12 gap-2">
            <div className="lg:basis-2/5 w-full lg:py-5 ">
              <div className="gap-6 mb-6 basis-2/5 flex items-end justify-between">
                {" "}
                <p className="  basis-2/6 text-base font-medium  capitalize">
                  name:
                </p>
                <p className="text-base text-right w-full text-yellow-500 font-medium  capitalize">
                  adebayo ridwan
                </p>
              </div>
              <div className="gap-6 mb-6 basis-2/5 flex items-end justify-between">
                {" "}
                <p className="  basis-2/6 text-base font-medium  capitalize">
                  doB:
                </p>
                <p className="text-base text-right text-yellow-500 font-medium  capitalize">
                  4th-july
                </p>
              </div>
              <div className="gap-6  lg:mb-6 basis-2/5 flex sm:items-center justify-end">
                {" "}
                <p className=" basis-2/6 text-base font-medium  capitalize">
                  address:
                </p>
                <p className="w-full text-base text-right text-yellow-500 font-medium  capitalize">
                  4 oniile ola close surulere estate ede NG
                </p>
              </div>
            </div>
            <div className="lg:basis-2/5 w-full  lg:py-5">
              <div className="gap-6  mb-6 basis-2/5 flex items-center justify-end ">
                <p className="basis-2/6 text-base font-medium  capitalize ">
                  githb:
                </p>
                <p className=" w-full   text-base text-right text-yellow-500 font-medium  capitalize">
                 <a href="https://github.com/wetwan" target="blank"> github</a> 
                </p>
              </div>
              <div className="gap-6  mb-6 basis-2/5 flex items-center justify-end">
                <p className="capitalize text-base text-left basis-2/6 font-medium ">
                  email:
                </p>
                <p className="mx-auto  w-full  text-base text-right text-yellow-500 font-medium  capitalize">
                  adebayo.ridwan@ymail.com
                </p>
              </div>
              <div className="gap-6  mb-6 basis-2/5 flex items-center justify-end">
                <p className="basis-2/6 text-base font-medium  capitalize ">
                  phone:
                </p>
                <p className="mx-auto  w-full  text-base text-right text-yellow-500 font-medium  capitalize">
                  +2349-03703-1172
                </p>
              </div>
            </div>
          </div>
          <button className="uppercase mx-auto mt-10 flex cursor-pointer px-16 whitespace-nowrap items-center gap-6  font-bold py-7 bg-yellow-500 border-none text-white text-base text-right">
            {" "}
            Download CV
          </button>
        </motion.div>
      </div>

      {/* my skills  */}

      <div className="mt-44 w-5/6 mx-auto">
        <div className="mb-20 w-3/6  text-center py-5 mx-auto">
          <span className="p-2 mx-auto text-center text-yellow-500 text-base font-bold uppercase">
            skills
          </span>
          <h4 className="text-5xl w-full whitespace-nowrap capitalize font-medium leading-normal ">
            about me
          </h4>
        </div>
        {/* my skill valiue */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
          transition={{ duration: 0.5 }}
          className=" px-10 py-5 grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillIndex.map((skill, i) => (
            <Skills key={i} percent={skill.percent} name={skill.name} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default index;
