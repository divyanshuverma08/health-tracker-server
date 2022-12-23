module.exports = (patient) => {
    const today = new Date();
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
        margin: 20px;
        padding: 20px;
        box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255),
                0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
    }
    
    </style>
</head>
<body>
    <div>
        <div>
            <div>
                <h1>Patient Details</h1>
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
                <label>${patient.dob}</label>
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
</body>
</html>
    `;
};
