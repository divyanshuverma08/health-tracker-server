const { Router } = require("express");
const {
  preview_prescription,
  get_patient,
  info_patient,
} = require("../controllers/patientControllers");
const { requirePatientAuth } = require("../middlewares/patientAuthMiddleware");
const router = Router();

router.get("/prescription/:id", requirePatientAuth, preview_prescription);
router.get("/getpatient", requirePatientAuth, get_patient);
router.get("/patient/info/:id", info_patient);

module.exports = router;
