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
    
    .flex-container {
        display: flex;
    }
    
    .flex-child {
        flex: 1;
    }
    
    .flex-child:first-child {
        margin-right: 20px;
    }
    
    </style>
</head>
<body>
    <div>
        <div class="flex-container">
            <div class="flex-child">
                <div>
                    <label>Dr.</label>
                    <label>${patient.name.firstName}</label>
                </div>
                <div>
                    <label>Mobile No.</label>
                    <label>doctormobile</label>
                </div>
            </div>
            <div class="flex-child">
                <div>
                    <label>hospital name</label>
                </div>
                <div>
                    <label>hospital address</label>
                </div>
                <div>
                    <label>Phone no.</label>
                    <label>hospital mobile</label>
                </div>
            </div>
        </div>
        <hr style="height:2px;border-width:0;color:gray;background-color:gray">
        <div class="flex-container">
            <div class="flex-child">
                <div>
                    <label>Health ID : </label>
                    <label>healthID</label>
                </div>
                <div>
                    <label>Patient Name : </label>
                    <label>patient name</label>
                </div>
                <div>
                    <label>Address: </label>
                    <label>patient address</label>
                </div>
            </div>
            <div class="flex-child">
                <div>
                    <label>Date : </label>
                    <label>date</label>
                </div>
            </div>
        </div>
        <hr style="height:2px;border-width:0;color:gray;background-color:gray">
        <div class="flex-container">
            <div class="flex-child">
                <div>
                    <label>Chief complaints</label>
                </div>
                <hr style="height:2px;border-width:0;color:gray;background-color:gray">
                <div>
                    <label>complaint(days)</label>
                </div>
            </div>
            <div class="flex-child">
                <div>
                    <label>Clinincal findings</label>
                </div>
                <hr style="height:2px;border-width:0;color:gray;background-color:gray">
                <div>
                    <label>complaint finding</label>
                </div>
            </div>
        </div>
        <br>
        <hr style="width:80%">
        <div>
            <h4>Notes</h4>
            <p>prescription notes</p>
        </div>
        <div>
            <h4>Diagnosis</h4>
            <p>prescription diagnosis</p>
        </div>
        <div>
            <h4>Procedure Conducted</h4>
            <p>procedureConducted</p>
        </div>
        <hr style="height:2px;border-width:0;color:gray;background-color:gray">
        <div class="flex-container">
            <div class="flex-child">
                <div>
                    <label>Medicine Name</label>
                </div>
                <hr style="height:2px;border-width:0;color:gray;background-color:gray">
                <div>
                    <label>medicineName</label>
                </div>
            </div>
            <div class="flex-child">
                <div>
                    <label>Dosages & Duration</label>
                </div>
                <hr style="height:2px;border-width:0;color:gray;background-color:gray">
                <div>
                    <div>
                        <label>morning :</label>
                        <label>morning quantity (remark)</label>
                    </div>
                    <div>
                        <label>afternoon :</label>
                        <label>afternoon quantity (remark)</label>
                    </div>
                    <div>
                        <label>night :</label>
                        <label>evening quantity (remark)</label>
                    </div>
                    <div>
                        <label>days :</label>
                        <label>duration</label>
                    </div>
                    <div>
                        <label>Total Tab. :</label>
                        <label>medicine total</label>
                    </div>
                </div>
            </div>
        </div>
        <br>
        <hr style="width:80%">
        <div>
            <h4>Insvestigations</h4>
            <p>investigation</p>
        </div>
        <div>
            <h4>Advices</h4>
            <p>advice</p>
        </div>
    </div>
</body>
</html>
    `;
};
