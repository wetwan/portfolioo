/* eslint-disable react-hooks/rules-of-hooks */
import { ChevronRightIcon } from "@heroicons/react/16/solid";
import { Link } from "react-router";
import { useForm } from "react-hook-form";

import { motion } from "framer-motion";

const index = () => {
  const {
    trigger,
    register,
    formState: { errors },
  } = useForm();

  const onSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };
  return (
    <section className="bg-gray-200 py-64 absolute top-0  w-full -z-10">
      <div className=" w-4/6 mx-auto text-center py-5 mb-28">
        <p className="mb-10 text-gray-600 inline-flex items-center justify-center gap-1 text-center text-base uppercase font-semibold ">
          <Link to="/" className="flex items-center hover:text-yellow-500">
            home <ChevronRightIcon className="w-5 h-5 inline" />
          </Link>
          contact me <ChevronRightIcon className="w-5 h-5 inline-block" />
        </p>
        <h4 className="text-5xl capitalize font-medium leading-normal ">
          contact me
        </h4>
      </div>
      {/* contact info  */}

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -500 },
          visible: { opacity: 1, y: 0 },
        }}
        className="sm:bg-white space-y-5 lg:space-y-0 gap-1 w-full flex sm:shadow-lg flex-col lg:flex-row items-start justify-between p-5  sm:w-5/6 mx-auto"
      >
        {/* contact form  */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
          className="lg:w-1/2 w-full  p-5 rounded bg-white"
        >
          <h2 className=" text-4xl font-bold capitalize  ">contact us</h2>
          <span className=" text-gray-500 text-xl ">
            We're open for any suggestion or just to have a chat
          </span>
          <div className="grid md:grid-cols-3 items-start mt-5 gap-10">
            <div className="">
              <span className="uppercase font-bold text-xl">address:</span>
              <p className="my-3 font-medium capitalize text-gray-500">
                {" "}
                4 onile ola close surulere estate ede NG
              </p>
            </div>
            <div className="">
              <span className="uppercase font-bold text-xl">email:</span>
              <p className="my-3 font-medium capitalize text-gray-500">
                <a href="mailto:adebayo.ridwan@ymail.com">
                  adebayo.ridwan@ymail.com
                </a>
              </p>
            </div>
            <div className="md:mx-5 mb-6 md:mb-0">
              <span className="uppercase font-bold text-xl">phone:</span>
              <p className="my-3 font-medium capitalize text-gray-500">
                <a href="tel:+2347031187797">07031187797</a>
              </p>
              <p className="my-3 font-medium capitalize text-gray-500">
                <a href="tel:+2349037031172">09037031172</a>
              </p>
            </div>
          </div>
          <form
            action="https://formsubmit.co/35576b6b245944277134ba170ef52b2b"
            method="POST"
            target="blank"
            onSubmit={onSubmitForm}
          >
            <div className="mb-3">
              <input
                type="text"
                placeholder="name"
                className="px-3 group w-5/6 placeholder-gray-600 py-2 placeholder-shown:capitalize outline-none border-none text-black "
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />
              <hr className="bg-orange-400 w-5/6 h-[2px]" />
              {errors.name && (
                <p className="mt-1 text-primary-500">
                  {errors.name.type === "required" && "This feild is required."}
                  {errors.name.type === "maxLength" &&
                    "Max length is 100 charx."}
                </p>
              )}
            </div>
            <div className="mb-3">
              <input
                type="email"
                placeholder="email"
                className="px-3 group w-5/6 placeholder-gray-600 py-2 placeholder-shown:capitalize outline-none border-none text-black "
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              <hr className="bg-orange-400 w-5/6 h-[2px]" />
              {errors.email && (
                <p className="mt-1 text-primary-500">
                  {errors.email.type === "required" &&
                    "This field is required."}
                  {errors.email.type === "pattern" && "Invalid email address."}
                </p>
              )}
            </div>
            <div className="mb-3">
              <input
                type="text"
                placeholder="subject"
                className="px-3 group w-5/6 placeholder-gray-600 py-2 placeholder-shown:capitalize outline-none border-none text-black "
                {...register("subject", {
                  required: true,
                  maxLength: 100,
                })}
              />
              <hr className="bg-orange-400 w-5/6 h-[2px]" />
              {errors.subject && (
                <p className="mt-1 text-primary-500">
                  {errors.subject.type === "required" &&
                    "This feild is required."}
                  {errors.subject.type === "maxLength" &&
                    "Max length is 100 charx."}
                </p>
              )}
            </div>
            <div className="mb-3">
              <textarea
                placeholder="your message"
                className="max-h-[150px] min-h-[150px] px-3 group w-5/6 placeholder-gray-600 py-2 placeholder-shown:capitalize outline-none border-none text-black "
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
              />
              <hr className="bg-orange-400 w-5/6 h-[2px]" />
              {errors.message && (
                <p className="mt-1 text-primary-500">
                  {errors.message.type === "required" &&
                    "This field is required."}
                  {errors.message.type === "maxLength" &&
                    "Max length is 2000 char."}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="border py-4 px-12 rounded-sm bg-yellow-700 text-white uppercase "
            >
              submit
            </button>
          </form>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 100 },
            visible: { opacity: 1, x: 0 },
          }}
          className="lg:w-1/2  w-full px-5 sm:rounded-none bg-white sm:bg-none overflow-hidden rounded-lg"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d31631.234417672207!2d4.4726101!3d7.6934189!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1734198425343!5m2!1sen!2sng"
            width="600"
            aria-label="map"
            className="w-full border-none outline-none"
            height="496"
         
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default index;
