const jwt = require("jsonwebtoken");
const Patient = require("../models/patient");

const requirePatientAuth = (req, res, next) => {
  const {authorization} = req.headers;
  if (authorization) {
    const token=authorization.replace("Bearer ","");
    jwt.verify(token, process.env.SECRET_KEY, async (err, decodedToken) => {
      if (err) {
        let AuthError = { error: "Patient is not authenticated!" };
        res.status(401).send({ AuthError });
      } else {
        const patient = await Patient.findById(decodedToken.id);
        req.patient = patient;
        next();
      }
    });
  } else {
    let AuthError = { error: "Patient is not authenticated!" };
    res.status(401).send({ AuthError });
  }
};

module.exports = { requirePatientAuth };
