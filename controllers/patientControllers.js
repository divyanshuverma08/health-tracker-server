const Patient = require("../models/patient");
const pdf = require('html-pdf');
const util = require('util'),
    request = util.promisify(require('request')),
    fs = require('fs'),
    fsp = fs.promises;
const htmlFile = require("../documents/index");
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
  const id = req.params.id;
  try{
    const patient = await Patient.findOne({ healthID : id });
    res.send(htmlFile(patient));
    // pdf.create(pdfTemplate(patient), {}).toFile(`${__basedir}/documents/${patient.healthID}info.pdf`, (err) => {
    //   if(err) {
    //       console.log(err);
    //       res.send(Promise.reject());
    //       return;
    //   }
    //   // res.status(200).sendFile(`${__basedir}/documents/${patient.healthID}info.pdf`)
    //   var stream = fs.createReadStream(`${__basedir}/documents/${patient.healthID}info.pdf`);
    //   var filename = `${patient.healthID}info.pdf`; 
    //   // Be careful of special characters
    
    //   filename = encodeURIComponent(filename);
    //   // Ideally this should strip them
    
    //   res.setHeader('Content-disposition', 'inline; filename="' + filename + '"');
    //   res.setHeader('Content-type', 'application/pdf');
    
    //   stream.pipe(res)
    // });
  }catch(err){
    res.status(401).json({error : "Patient not found !!"})
  }
};

module.exports.pdf_patient = async (req, res) => {
  const id = req.params.id;
  try{
    const patient = await Patient.findOne({ healthID : id });
    pdf.create(pdfTemplate(patient), {}).toFile(`${__basedir}/documents/${patient.healthID}info.pdf`,(err) => {
      if(err) {
          console.log(err);
          res.send(Promise.reject());
          return;
      }
      res.download(`${__basedir}/documents/${patient.healthID}info.pdf`);
      setTimeout(()=>{
        fs.unlinkSync(`${__basedir}/documents/${id}info.pdf`);
      },1000);
    });
  }catch(err){
    res.status(401).json({error : "Patient not found !!"})
  }
};