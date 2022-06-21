const Pasaje = require("../models/pasaje");
const pasajeCtrl = {};

pasajeCtrl.createPasaje = async (req, res) => {
  var pasaje = new Pasaje(req.body);
  try {
    await pasaje.save();
    res.json({
      status: "1",
      msg: "Pasaje guardado.",
    });
  } catch (error) {
    res.status(400).json({
      status: "0",
      msg: "Error procesando operacion.",
    });
  }
};
pasajeCtrl.getPasajes = async (req, res) => {
  const objQuery = req.query;

  if (objQuery.hasOwnProperty("categoria") && objQuery["categoria"] !== "") {
    const category = objQuery["categoria"];
    const passagesByCategory = await Pasaje.find({
      categoriaPasajero: category,
    }).populate("pasajero");
    return res.json(passagesByCategory);
  }
  var pasajes = await Pasaje.find().populate("pasajero");
  res.json(pasajes);
};

pasajeCtrl.editPasaje = async (req, res) => {
  const vpasaje = new Pasaje(req.body);
  try {
    await Pasaje.updateOne({ _id: req.body._id }, vpasaje);
    res.json({
      status: "1",
      msg: "Pasaje updated",
    });
  } catch (error) {
    res.status(400).json({
      status: "0",
      msg: "Error procesando la operacion",
    });
  }
};

pasajeCtrl.deletePasaje = async (req, res) => {
  try {
    await Pasaje.deleteOne({ _id: req.params.id });
    res.json({
      status: "1",
      msg: "Pasaje removed",
    });
  } catch (error) {
    res.status(400).json({
      status: "0",
      msg: "Error procesando la operacion",
    });
  }
};
pasajeCtrl.getPasaje = async (req, res) => {
  try {
    const { id } = req.params;
    const passage = await Pasaje.findById(id);
    return res.json(passage);
  } catch (error) {
    res.status(400).json({
      status: "0",
      msg: "Error procesando la operacion",
    });
  }
};
module.exports = pasajeCtrl;
