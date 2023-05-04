import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { BsWhatsapp, BsInstagram, BsSend, BsArrowRight } from "react-icons/bs";

import "./Contact.css";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const form = useRef();

  const onSubmit = async () => {
    try {
      await emailjs
        .sendForm(
          "service_ldaidad",
          "template_0fjt6az",
          form.current,
          "vsv1o8h3GCgxnNB-l"
        )
        .then(
          (result) => {
            console.log(result.text);
            alert("Message sent!");
          },
          (error) => {
            console.log(error.text);
          }
        );

      reset();
    } catch (error) {
      console.error("error", error);
    }
  };

  return (
    <div id="contacto" className="contAll">
      <h3>Contact Me</h3>
      <div className="contactGrid">
        <div className="contacts">
          <div className="contact">
            <BsInstagram className="ContInco" />
            <p className="pName">Instagram</p>
            <p>@jpd_web_developer.23</p>
            <div className="containerA">
              <a
                className="multimedia"
                href="https://www.instagram.com/jpd_web_developer.23/"
                target="_blank"
              >
                Check my Instagram
              </a>
              <BsArrowRight className="rowRight" />
            </div>
          </div>
          <div className="contact">
            <BsWhatsapp className="ContInco" />
            <p className="pName">WhatsApp</p>
            <p>+54 1153754846</p>
            <div className="containerA">
              <a
                className="multimedia"
                href="https://api.whatsapp.com/send?phone=541153754846"
                target="_blank"
              >
                Write me
              </a>
              <BsArrowRight className="rowRight" />
            </div>
          </div>
        </div>
        <div className="form">
          <h4>Send me an e-mail</h4>
          <form className="inputs" ref={form} onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="name">Name</label>
            <input
              {...register("name", {
                required: true,
              })}
              id="name"
              type="text"
            />
            {errors.name?.type === "required" && (
              <p className="errorMessage">required information</p>
            )}
            <label htmlFor="email">Email</label>
            <input
              {...register("email", {
                required: true,
              })}
              id="email"
              type="email"
            />
            {errors.email?.type === "required" && (
              <p className="errorMessage">required information</p>
            )}
            <label htmlFor="message">Message</label>
            <textarea
              {...register("message", {
                required: true,
              })}
              id="message"
              cols="30"
              rows="10"
            ></textarea>
            {errors.message?.type === "required" && (
              <p className="errorMessage">required information</p>
            )}
            <div className="divInpuntSend">
              <input id="inputSubmit" type="submit" value="Send" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
