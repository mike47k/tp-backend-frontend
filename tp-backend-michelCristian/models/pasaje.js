const mongoose = require("mongoose");
const Persona = require("./persona");
const { Schema } = mongoose;
const PasajeSchema = new Schema({
  precioPasaje: { type: Number, required: true },
  categoriaPasajero: { type: String, required: true },
  fechaCompra: { type: String, required: true },
  pasajero: { type: Schema.Types.ObjectId, required: true, ref: "Persona" },
});
module.exports =
  mongoose.models.pasaje || mongoose.model("Pasaje", PasajeSchema);
