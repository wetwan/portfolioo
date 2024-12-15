import { motion } from "framer-motion";

type Props = {
  name: string;
  percent: number;
};

const Skills = ({ name, percent }: Props) => {
  const childVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };
  return (
    <motion.div
      variants={childVariant}
      transition={{ duration: 0.5 }}
      className="w-11/12 my-7 mx-5"
    >
      <div className="flex items-center w-5/6 justify-between text-base uppercase px-2 mb-3">
        <p>{name}</p>
        <p className="text-yellow-500"> {percent}%</p>
      </div>
      <div className="relative w-full bg-white before:absolute before:content-[''] before:w-5/6 border  h-5 rounded-full before:bg-red-700 before:top-0 before:bottom-0 before:m-auto"></div>
    </motion.div>
  );
};

export default Skills;
