import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema(
  {
    formulario: { type: String, required: true },
    nombre: { type: String, required: true },
    telefono: { type: Number, required: false },
    ciudad: { type: String, required: true },
    empresa: { type: String, required: true },
    email: { type: String, required: true },
  },

  {
    timestamps: true,
  }
);

const Contact =
  mongoose.models.Contact || mongoose.model('Contact', contactSchema);
export default Contact;
