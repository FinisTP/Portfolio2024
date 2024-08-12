import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_gp3dn3p",
        "template_opsdeih",
        {
          from_name: form.name,
          to_name: "Finis",
          from_email: form.email,
          to_email: "tanphat.cineart@gmail.com",
          message: form.message,
        },
        "3hiEH0KDT--7RSICD"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again. " + error.text);
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-col flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Contact</p>
        <h3 className={styles.sectionHeadText}>Ask me anything.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="John Doe"
              className='bg-tertiary py-4 px-6 placeholder:text-gray text-black rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="doejohn_work@gmail.com"
              className='bg-tertiary py-4 px-6 placeholder:text-gray text-black rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='Development collaboration, seeking advices, or just say hi! I am all ears.'
              className='bg-tertiary py-4 px-6 placeholder:text-gray text-black rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-black font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      {/* <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div> */}

      <div className='flex flex-row gap-16 self-center'>
        <p><span className='text-white font-medium mb-4'>Web Template: </span> <a href="https://www.youtube.com/@javascriptmastery" className='text-tertiary font-bold'>JavaScript Mastery</a></p>
        <p><span className='text-white font-medium mb-4'>Space Station: </span>
          <a href="https://sketchfab.com/3d-models/space-station-0da4a24e7edd49159737675ffcc06228" className='text-tertiary font-bold'>re1monsen</a></p>
      </div>


    </div>
  );
};

export default SectionWrapper(Contact, "contact");
