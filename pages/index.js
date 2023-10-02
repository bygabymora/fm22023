import React from 'react';
import ContactUs from '../components/ContactUs';
import RootLayout from '../components/layout';

export default function Home() {
  return (
    <RootLayout title="Formulario Medellín 2023">
      <main className="">
        <div className="contact__container container">
          <ContactUs />
        </div>
      </main>
    </RootLayout>
  );
}
