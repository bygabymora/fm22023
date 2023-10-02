import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useRouter } from 'next/router';
import Banner from '../public/images/banner.png';
import Image from 'next/image';

const ContactUs = () => {
  const phoneNumber = '573202193192';
  const form = useRef();
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [ticketNumber, setTicketNumber] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_2tj30li',
        'template_js88zdk',
        form.current,
        '7QVSeaXEWwasg-dAM'
      )
      .then(
        (result) => {
          console.log(result.text);

          // Una vez enviado el correo, redirigir a WhatsApp
          redirectToWhatsApp();

          // Limpiar los campos del formulario
          setName('');
          setPhone('');
          setCompany('');
          setEmail('');
          setCity('');
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const redirectToWhatsApp = () => {
    const whatsappMessage = `¡Hola Moraequipos! Escanee el código en el Congreso de Bacteriólogos de Medellín. Soy *${name}* y quiero pertenecer a su red.`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    router.push(url);
  };

  const tab = <>&nbsp;&nbsp;</>;

  const handleDownloadPDF = () => {
    // Ruta al archivo PDF en la carpeta pública
    const pdfUrl = '/moraequipos.pdf'; // Asegúrate de que la ruta sea correcta

    // Abre una nueva ventana o pestaña del navegador con el PDF
    window.open(pdfUrl, '_blank');
    const fakeEvent = {
      preventDefault: () => {}, // Define una función preventDefault vacía
    };
    sendEmail(fakeEvent);
    redirectToWhatsAppWithDelay();
  };
  const redirectToWhatsAppWithDelay = () => {
    // Agrega un retraso de 5 segundos (5000 milisegundos) antes de redirigir
    setTimeout(() => {
      redirectToWhatsApp();
    }, 10000);
  };

  return (
    <div className=" contact__container text-center">
      <Image src={Banner} alt="Moraequipos presente"></Image>
      <h3 className="contact__title">
        Asegúrate de obtener resultados precisos y confiables usando agua ultra
        pura.
      </h3>
      <p>
        Por favor ingresa tus datos y podras descargar el PDF con la
        información.
      </p>
      <br />
      <form
        className="contact__form text-center"
        ref={form}
        onSubmit={sendEmail}
      >
        <div className="contact__form-div">
          <label className="contact__form-tag">Nombre Completo*</label>
          <input
            type="text"
            name="user_name"
            className="contact__form-input"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
        </div>
        <div className="contact__form-div">
          <label className="contact__form-tag">Teléfono*</label>
          <input
            type="text"
            name="user_phone"
            className="contact__form-input"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
            required
          />
        </div>
        <div className="contact__form-div">
          <label className="contact__form-tag">Ciudad*</label>
          <input
            type="text"
            name="user_city"
            className="contact__form-input"
            onChange={(e) => setCity(e.target.value)}
            value={city}
            required
          />
        </div>
        <div className="contact__form-div">
          <label className="contact__form-tag mb-2">Empresa {tab}</label>
          <input
            type="text"
            name="user_company"
            className="contact__form-input"
            onChange={(e) => setCompany(e.target.value)}
            value={company}
          />
        </div>
        <div className="contact__form-div">
          <label className="contact__form-tag">Email*</label>
          <input
            type="email"
            name="user_email"
            className="contact__form-input"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>
        <div className="privacy-checkbox">
          <input type="checkbox" id="dataConsent" name="dataConsent" required />
          {tab}
          <label htmlFor="dataConsent">
            Aceptas el tratamiento de datos y el envío de promociones
            (Moraequipos no entregará tus datos a terceros en ningún momento).
          </label>
        </div>

        <input type="hidden" name="user_ticket" value={ticketNumber} />
        <br />
        <button
          className="button button--flex btn-contact"
          type="button"
          onClick={(e) => {
            sendEmail(e);

            redirectToWhatsAppWithDelay();

            handleDownloadPDF();
          }}
        >
          <span className="text-white">Descargar PDF</span>
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
