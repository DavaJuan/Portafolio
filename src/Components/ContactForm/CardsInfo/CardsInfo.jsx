import { IoLocationSharp } from "react-icons/io5";
import { BsWhatsapp } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";
import { useTranslation } from "react-i18next";
import "./CardsInfo.css";

const CardsInfo = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <div className="contact-info-card-grid">
      <div className="card-info-contact">
        <span>
          <IoLocationSharp />
        </span>
        <h4>{t("ContacSection.ubicacion/location")}</h4>
        <p>Buenos Aires - Argentina</p>
      </div>
      <div className="card-info-contact">
        <span>
          <MdOutlineMailOutline />
        </span>
        <h4>{t("ContacSection.email-completo")}</h4>
        <p>davalosjuanpablo038@gmail.com</p>
      </div>
      <div className="card-info-contact">
        <span>
          <BsWhatsapp />
        </span>
        <h4>WhatsApp:</h4>
        <p>+54 1153754846</p>
        <button>{t("ContacSection.boton-escribime")}</button>
      </div>
    </div>
  );
};

export default CardsInfo;
