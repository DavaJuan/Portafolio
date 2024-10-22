import { IoLocationSharp } from "react-icons/io5";
import { BsWhatsapp } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";
import "./CardsInfo.css";

const CardsInfo = () => {
  return (
    <div className="contact-info-card-grid">
      <div className="card-info-contact">
        <span>
          <IoLocationSharp />
        </span>
        <h4>Ubicacion</h4>
        <p>Buenos Aires - Argentina</p>
      </div>
      <div className="card-info-contact">
        <span>
          <MdOutlineMailOutline />
        </span>
        <h4>Correo</h4>
        <p>davalosjuanpablo038@gmail.com</p>
      </div>
      <div className="card-info-contact">
        <span>
          <BsWhatsapp />
        </span>
        <h4>WhatsApp</h4>
        <p>+54 1153754846</p>
        <button>Write Me!</button>
      </div>
    </div>
  );
};

export default CardsInfo;
