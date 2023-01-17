import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

// Default Fade In for future section elements
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.5,
    },
  },
};

const ContactSection = () => {
  const [mounted, setMounted] = useState(false);
  // Contact Form button label status
  const [submitStatus, setSubmitStatus] = useState("Submit");

  // EmailJS integration for contact form
  const form = useRef(null);
  const sendEmail = (e) => {
    e.preventDefault();

    console.log(e.target.email.value);
    if (e.target.name.value == "" || e.target.email.value == "" || e.target.message.value == "") {
      alert("Field(s) cannot be empty. Please double check!");
      return;
    }

    emailjs.sendForm("service_ip5uu5l", "template_3yohaoz", e.currentTarget, `g0K5rR910iY-3ohtl`).then(
      (result) => {
        setSubmitStatus("Sent!");
        e.target.name.value = "";
        e.target.email.value = "";
        e.target.message.value = "";
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section id="contact" className="flex flex-col mt-20 pt-20 justify-center items-center">
      <motion.div className="px-2 mt-10 lg:w-2/3" variants={fadeUp} initial="hidden" whileInView="show">
        <h1 className="text-6xl lg:text-7xl font-josefin font-medium text-center lg:text-left">Let&apos;s Chat!</h1>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col w-full justify-center items-center px-10 md:px-12 lg:px-0 h-full mt-5 mb-20"
        >
          <div className="flex flex-row w-full">
            <input type="name" name="name" className="inputfield mr-5 lg:mr-10" placeholder="Name" />
            <input type="email" name="email" className="inputfield ml-4 lg:ml-10" placeholder="Email" />
          </div>
          <textarea name="message" className="inputmessage" cols={30} rows={8}></textarea>
          <button className="submit" type="submit">
            {submitStatus}
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default ContactSection;
