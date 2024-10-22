import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";
import { IoLocationSharp, IoPhonePortraitOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import "./ContactForm.css";
import CardsInfo from "./CardsInfo/CardsInfo";

const ContactForm = () => {
  const [t, i18n] = useTranslation("global");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "e45c136f-1fa0-42c0-88f2-70d4f2146aa7");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Message sent seccessfully!",
        icon: "success",
      });
    }
  };

  return (
    <div className="container-form-grid">
      <div className="contact-box-1">
        <div className="contact-box-1-sub">
          <CardsInfo />
        </div>
      </div>
      {/*separacion*/}
      <div className="contact">
        <form onSubmit={onSubmit}>
          <h2>{t("ContacSection.title")}</h2>
          <div className="inpunt-box">
            <label>{t("ContacSection.name")}</label>
            <input
              name="name"
              type="text"
              className="field"
              placeholder="Enter your name... "
              required
            />
          </div>
          <div className="inpunt-box">
            <label>{t("ContacSection.email")}</label>
            <input
              name="email"
              type="email"
              className="field"
              placeholder="Enter your Email... "
              required
            />
          </div>
          <div className="inpunt-box">
            <label>{t("ContacSection.msj")}</label>
            <textarea
              className="field-mess"
              name="message"
              placeholder="Enter your message..."
              required
            ></textarea>
          </div>
          <button>{t("ContacSection.button")}</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
