const jwt = require("jsonwebtoken");
const Doctor = require("../models/doctor");

const requireDoctorAuth = (req, res, next) => {
  const {authorization} = req.headers;
  if (authorization) {
    const token=authorization.replace("Bearer ","");
    jwt.verify(token, process.env.SECRET_KEY, async (err, decodedToken) => {
      if (err) {
        let AuthError = { error: "Doctor is not authenticated!" };
        res.status(401).send({ AuthError });
      } else {
        const doctor = await Doctor.findById(decodedToken.id);
        req.doctor = doctor;
        next();
      }
    });
  } else {
    let AuthError = { error: "Doctor is not authenticated!" };
    res.status(401).send({ AuthError });
  }
};

module.exports = { requireDoctorAuth };
