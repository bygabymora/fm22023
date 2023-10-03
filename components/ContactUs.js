import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import Banner from '../public/images/banner.png';
import Image from 'next/image';

const ContactUs = () => {
  const form = useRef();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');

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

  const tab = <>&nbsp;&nbsp;</>;

  const handleDownloadPDF = () => {
    // Ruta al archivo PDF en la carpeta pública
    const pdfUrl = '/moraequipos.pdf'; // Asegúrate de que la ruta sea correcta

    // Abre una nueva ventana o pestaña del navegador con el PDF
    window.open(pdfUrl, '_blank');
  };

  return (
    <div className="contact__container text-center">
      <Image src={Banner} alt="Moraequipos presente"></Image>
      <h3 className="contact__title">
        Asegúrate de obtener resultados precisos y confiables usando agua ultra
        pura.
      </h3>
      <p>
        Por favor ingresa tus datos y podrás descargar el PDF con la
        información.
      </p>
      <br />
      <form
        className="contact__form text-center"
        ref={form}
        onSubmit={(e) => {
          sendEmail(e);
          handleDownloadPDF(); // Llama a la función para abrir el PDF
        }}
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

        <br />
        <button className="button button--flex btn-contact" type="submit">
          <span className="text-white">Descargar PDF</span>
        </button>
      </form>
      <br />
    </div>
  );
};

export default ContactUs;
