import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./ConatactForm.css";
import { Link } from "react-router-dom";
export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qf5q31h",
        "template_jzcn9aq",
        form.current,
        "user_PpryWkSSmlY5WMKoZUpIo"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <>
      <div className="contact">
        <h2 className="text-whitew">Contact form</h2>
        <hr />
        <h4 className="text-scolor">Do you want to contact with me</h4>
        <form ref={form} onSubmit={sendEmail}>
          <input
            className="w-25 p-1 m-2"
            type="text"
            name="user_name"
            placeholder="Enter your name"
          />{" "}
          <br />
          <input
            className="w-25 p-1 m-2"
            type="email"
            name="user_email"
            placeholder="Enter your email"
          />{" "}
          <br />
          <textarea
            className="w-25  m-2"
            name="message"
            placeholder="messege"
          />{" "}
          <br />
          <input className="w-25" type="submit" value="Sent" />
        </form>
      </div>
    </>
  );
};
