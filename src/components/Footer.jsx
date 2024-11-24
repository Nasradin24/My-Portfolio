import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "../css/Footer.css";
import imageAZ from "../assets/images/az-flag.png";
import imageEN from "../assets/images/en-flag.png";

function Footer() {
  const { i18n, t } = useTranslation();
  const [currentLang, setCurrentLang] = useState(i18n.language);

  const toggleLanguage = () => {
    const newLang = currentLang === "az" ? "en" : "az";
    i18n.changeLanguage(newLang);
    setCurrentLang(newLang);
  };

  return (
    <footer className="footer-last">
      <p>© 2024 Guseinovi Nasradin.</p>
      <p>
        {t("Switch language to")}{" "}
        <img
          src={currentLang === "az" ? imageEN : imageAZ}
          width={20}
          alt={currentLang === "az" ? "English Flag" : "Azerbaijan Flag"}
          onClick={toggleLanguage}
          style={{ cursor: "pointer" }}
        />
      </p>
    </footer>
  );
}

export default Footer;
