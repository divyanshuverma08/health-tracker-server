const Patient = require("../models/patient");
const { createToken } = require("../utils/createToken");

const maxAge = 3 * 24 * 60 * 60;
const handleError = (err) => {
  let errors = {};

  // incorrect email
  if (err.message === "Invalid HealthID or Email") {
    errors.healthID = "That HealthID is not registered";
  }

  // incorrect password
  if (err.message === "Incorrect Password") {
    errors.password = "That password is incorrect";
  }

  // duplicate error code
  if (err.code === 11000) {
    errors.healthID = "This AdharCard is already Registerd on System.";
    return errors;
  }

  if (err.message.includes("patient validation failed")) {
    let errorsarray = Object.values(err.errors);
    errorsarray.forEach(({ properties }) => {
      if (!properties.path.includes(".")) {
        errors[properties.path] = properties.message;
      }
    });
  }
  return errors;
};

module.exports.patient_register = async (req, res) => {
  const diseases = Object.values(req.body.diseases);
  const {
    name,
    dob,
    mobile,
    email,
    adharCard,
    bloodGroup,
    address,
    password,
    contactPerson,
  } = req.body;

  const healthID = adharCard;
  try {
    const patient = await Patient.create({
      name,
      healthID,
      dob,
      mobile,
      email,
      adharCard,
      bloodGroup,
      address,
      password,
      diseases,
      contactPerson,
    });
    const token = createToken(patient._id);
    // res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(200).json({ patient, token });
  } catch (err) {
    const errors = handleError(err);
    res.status(404).json({ errors });
  }
};

module.exports.patient_login = async (req, res) => {
  const { healthID,emailID, password } = req.body;
  var body;
  if(emailID === undefined){
    body = {
      healthID,
      password
    };
  }else{
     body = {
      emailID,
      password
    };
  }
  try {
    const patient = await Patient.login(body);
    const token = createToken(patient._id);
    // res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(200).json({ patient ,token});
  } catch (err) {
    const errors = handleError(err);
    res.status(404).json({ errors });
  }
};
