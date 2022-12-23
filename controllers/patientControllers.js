const Patient = require("../models/patient");
const pdf = require('html-pdf');

const pdfTemplate = require('../documents');

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
  const email = "ram.singh@gmail.com";
  const patient = await Patient.findOne({ email });
  pdf.create(pdfTemplate(patient), {}).toFile(`${__basedir}/documents/${patient.healthID}info.pdf`, (err) => {
    if(err) {
        res.send(Promise.reject());
    }
    res.status(200).sendFile(`${__basedir}/documents/${patient.healthID}info.pdf`)
  });
};