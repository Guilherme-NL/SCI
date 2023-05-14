import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import logo from "../images/logo-cut.png";

export default function WhatsApp() {
  return (
    <FloatingWhatsApp
      phoneNumber="553135711370"
      avatar={logo}
      statusMessage="on-line"
      chatMessage="Olá, tudo bem? Como posso te ajudar?"
      accountName="SCI"
      darkMode={true}
      allowEsc={true}
    />
  );
}
