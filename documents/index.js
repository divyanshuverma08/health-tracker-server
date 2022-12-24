module.exports = (patient) => {
    const date = new Date(patient.dob);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
    body{
        margin: 25px;
        padding: 25px;
    }
    
    </style>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.9.2/html2pdf.bundle.js"></script>
</head>
<body>
    <div id="data">
        <div>
            <div style="display:flex; flex-direction:row align-items: center; justify-content: space-between;">
                <h1>Patient Details</h1>
                <button id="download"> Click to download</button>
            </div>
            <div>
                <label><strong>Health ID : </strong></label>
                <label>${patient.healthID}</label>
            </div>
            <br>
            <div>
                <label><strong>Patient Name : </strong></label>
                <label>${patient.name.firstName} ${patient.name.surName}</label>
            </div>
            <br>
            <div>
                <label><strong>DOB : </strong></label>
                <label>${day}/${month}/${year}</label>
            </div>
            <br>
            <div>
                <label><strong>Mobile No. </strong></label>
                <label>${patient.mobile}</label>
            </div>
            <br>
            <div>
                <label><strong>Blood Group : </strong></label>
                <label>${patient.bloodGroup}</label>
            </div>
            <br>
            <div>
                <label><strong>Email : </strong></label>
                <label>${patient.email}</label>
            </div>
            <br>
            <div>
                <label><strong>Address: </strong></label>
                <label>${patient.address.building}, ${patient.address.city}, ${patient.address.state}, ${patient.address.pincode}</label>
            </div>
            <br>
            <div>
                <h2>Disease : </h2>
                <div>
                    <label>${patient.diseases[0].disease}</label>
                    <label>(${patient.diseases[0].yrs} yrs)</label>
                </div>
            </div>
            <div>
                <h2>Contact Person : </h2>
            </div>
            <div>
                <div>
                    <label><strong>Name : </strong></label>
                    <label>${patient.contactPerson.name.firstName}</label>
                    <label>${patient.contactPerson.name.surName}</label>
                </div>
                <br>
                <div>
                    <label><strong>Mobile No. </strong></label>
                    <label>${patient.contactPerson.mobile}</label>
                </div>
                <br>
                <div>
                    <label><strong>Email : </strong></label>
                    <label>${patient.contactPerson.email}</label>
                </div>
                <br>
                <div>
                    <label><strong>Relation : </strong></label>
                    <label>${patient.contactPerson.relation}</label>
                </div>
                <br>
                <div>
                    <label><strong>Address: </strong></label>
                    <label>${patient.contactPerson.address.building},
                        ${patient.contactPerson.address.city},
                        ${patient.contactPerson.address.state},
                        ${patient.contactPerson.address.pincode}</label>
                </div>
            </div>
        </div>
    </div>
    <script>
    document.getElementById("download").addEventListener("click", () => {
          const data = this.document.getElementById("data");
          var opt = {
              margin: 1,
              filename: '${patient.healthID}.pdf',
              image: { type: 'jpeg', quality: 0.98 },
              html2canvas: { scale: 2 },
              jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
          };
          html2pdf().from(data).set(opt).save();
      })
  </script>
</body>
</html>
    `;
};
