/* eslint-disable react-hooks/exhaustive-deps */
import { motion, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

 type Props = {
    label: string,
    index: number,
}
const Card = ({label, index}:Props) => {
  const [dispalyValue, setDisplayvalue] = useState(0);
  const childVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };
  const springValue = useSpring(0, {
    bounce: 0,
    duration: 5000,
  });
  springValue.on("change", (value) => {
    setDisplayvalue(Math.round(value));
  });
  useEffect(() => {
    return springValue.set(index);
  }, [springValue]);

  return (
    <motion.div
      variants={childVariant}
      transition={{ duration: 1 }}
      className=" shadow-ms rounded bg-white shadow-slate-100 p-10 py-32"
    >
      <h2 className="text-yellow-500 text-center text-8xl font-bold  ">
        {" "}
        {dispalyValue}
      </h2>
      <p className="uppercase  mt-5 text-2xl text-black font-medium text-center">
        {label}
      </p>
    </motion.div>
  );
};

export default Card;
