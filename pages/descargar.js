import fs from 'fs';
import path from 'path';

export default function Descargar() {
  return <p>Descargando...</p>;
}

export async function getServerSideProps(context) {
  const { res } = context;

  // Especifica la ruta del archivo
  const filePath = path.join(process.cwd(), 'public', 'moraequipos.pdf');
  const fileContent = fs.readFileSync(filePath);

  // Configura las cabeceras para la descarga
  res.setHeader('Content-Disposition', 'attachment; filename=moraequipos.pdf');
  res.setHeader('Content-Type', 'application/pdf');
  res.write(fileContent);

  // Termina la respuesta para iniciar la descarga
  res.end();

  return {
    props: {}, // no necesita pasar ninguna prop
  };
}
