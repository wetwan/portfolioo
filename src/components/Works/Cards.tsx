import { motion } from "framer-motion";
import { Link } from "react-router";

type Props = {
  image: string;
  title: string;
  stack: string[];
  link: string;
};
const Cards = ({ image, title, link, stack }: Props) => {
  const childVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };
  return (
    <motion.div
      variants={childVariant}
      transition={{ duration: 0.2 }}
      className="rounded-lg shadow-2xl bg-white border-black relative overflow-hidden h-[350px]"
    >
      <Link
        to={link}
        target="blank"
        className="text-center p-5 rounded-lg opacity-0 transition-all duration-300 ease-in-out   hover:opacity-80 z-30 absolute flex items-center justify-center flex-col  bg-yellow-100 h-full w-full "
      >
        <h1 className=" mb-5 font-bold text-3xl uppercase text-orange-500">
          {" "}
          {title}
        </h1>
        <div className="flex gap-1 items-center">
          {stack.map((item) => (
            <p
              key={item}
              className="px-4 py-2 rounded-full bg-yellow-700 text-white capitalize"
            >
              {item}
            </p>
          ))}
        </div>
      </Link>{" "}
      <img src={image} alt={title} className="w-full h-full object-cover z-30 " />
    </motion.div>
  );
};

export default Cards;
