const Patient = require("../models/patient");
const htmlFile = require("../documents/index");

module.exports.preview_prescription = async (req, res) => {
  const id = req.params.id;
  const healthID = req.patient.healthID;
  try {
    const patient = await Patient.findOne({ healthID });
    const prescription = patient.prescriptions.filter((pres) => pres._id == id);
    res.status(200).json({ prescription });
  } catch (err) {
    res.status(404).json({ error: "Something went wrong..." });
  }
};

module.exports.get_patient = async (req, res) => {
  let patient = req.patient;
  res.status(200).json({ patient });
};

module.exports.info_patient = async (req, res) => {
  const id = req.params.id;
  try{
    const patient = await Patient.findOne({ healthID : id });
    res.send(htmlFile(patient));
  }catch(err){
    res.status(401).json({error : "Patient not found !!"})
  }
};