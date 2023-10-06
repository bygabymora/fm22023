import Contact from '../../../models/Contact';
import db from '../../../utils/db';

const handler = async (req, res) => {
  try {
    await db.connect();

    const newContact = new Contact({
      ...req.body,
    });

    const contact = await newContact.save();
    res.status(201).send(contact);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Error guardando nuevo contacto.' });
  }
};
export default handler;
