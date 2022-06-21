const Transaccion = require("../models/transaccion");
const transaccionCtrl = {};

transaccionCtrl.createTransaccion = async (req, res) => {
  var transaccion = new Transaccion(req.body);
  try {
    await transaccion.save();
    res.json({
      status: "1",
      msg: "Transaccion guardado.",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: "0",
      msg: "Error procesando operacion.",
    });
  }
};
transaccionCtrl.getTransacciones = async (req, res) => {
  const objQuery = req.query;

  if (
    objQuery.hasOwnProperty("monedaOrigen") ||
    objQuery.hasOwnProperty("monedaDestino")
  ) {
    const monO = objQuery["monedaOrigen"];
    const monD = objQuery["monedaDestino"];
    if (monO !== "" && monD !== "") {
      const transaccionByMonORI = await Transaccion.find({
        monedaOrigen: monO,
        monedaDestino: monD,
      });
      return res.json(transaccionByMonORI);
    } else {
      if (monO !== "") {
        const transaccionByMonORI = await Transaccion.find({
          monedaOrigen: monO,
        });
        return res.json(transaccionByMonORI);
      }
      if (monD !== "") {
        const transaccionByMonORI = await Transaccion.find({
          monedaDestino: monD,
        });
        return res.json(transaccionByMonORI);
      }
    }
  }
  var transacciones = await Transaccion.find();
  res.json(transacciones);
};

transaccionCtrl.getTransaccionesByEmail = async (req, res) => {
  var transacciones = await Transaccion.find({ email: req.params.email });
  res.json(transacciones);
};
module.exports = transaccionCtrl;
